import { useState } from "react";
import AppointmentContext from "./appointmentContext";

const AppointmentState = (props) => {
    const host = "http://localhost:5000"
    const [shopId, setShopId] = useState("")
    const setId = (id) => {
        setShopId(id)
        localStorage.setItem("id", id)
    }
    const [appointments, setAppointments] = useState([])

    const getAppointments = async () => {
        const response = await fetch(`${host}/api/shops/fetchallappointments`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json()
        setAppointments(json)
    }

    const addAppointment = async (name, phone, services, email, address, time) => {
        const response = await fetch(`${host}/api/shops/addappointment/${localStorage.getItem("id")}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ name, phone, services, email, address, time }),
        });
        console.log("Adding a new appointment")
        const appointment = response.json()
        setAppointments(appointments.concat(appointment))
    }

    return (
        <AppointmentContext.Provider value={{ appointments, setId, addAppointment, getAppointments }}>
            {props.children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentState