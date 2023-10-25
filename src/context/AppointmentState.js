import { useState } from "react";
import AppointmentContext from "./appointmentContext";

const AppointmentState = (props) => {
    const host = "http://localhost:5000"
    const [shopId, setShopId] = useState("")
    const [appointmentId, setAppointmentId] = useState("")
    const [added, setAdded] = useState([])
    const [total, setTotal] = useState(0)
    const addService = (service, price) => {
        if (!added.includes(service)) {
            setAdded(added.concat(service))
            setTotal(total + parseInt(price, 10))
        }

    }
    const removeService = (service, price) => {
        if (added.includes(service)) {
            setAdded(added.filter(function (item) {
                return item !== service;
            }))
            setTotal(total - parseInt(price, 10))
        }


    }
    const setId = (id) => {
        setShopId(id)
        localStorage.setItem("id", id)
    }
    const setAppId = (id) => {
        setAppointmentId(id)
        localStorage.setItem("appid", id)
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

    const addAppointment = async (name, phone, services, email, address, time, date, servicetype, added, total) => {
        const response = await fetch(`${host}/api/shops/addappointment/${localStorage.getItem("id")}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ name, phone, services, email, address, time, date, servicetype, added, total }),
        });
        console.log("Adding a new appointment")
        const appointment = response.json()
        setAppointments(appointments.concat(appointment))
    }

    const deleteAppointment = async () => {
        const response = await fetch(`${host}/api/shops/deleteappointment/${localStorage.getItem("appid")}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });
        console.log("Deleteing an appointment")
        const appointment = response.json()
        console.log(appointment)
    }

    const editAppointment = async (id, date, time, services) => {
        const response = await fetch(`${host}/api/shops/updateappointment/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ date, time, services }),
        });
        console.log("Updating an appointment")
        const appointment = response.json()
        console.log(appointment)
    }



    return (
        <AppointmentContext.Provider value={{ removeService, total, addService, added, shopId, appointmentId, deleteAppointment, setAppId, appointments, setId, addAppointment, getAppointments, editAppointment }}>
            {props.children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentState