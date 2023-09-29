import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import AppointmentContext from '../context/appointmentContext';
import { useNavigate } from 'react-router-dom'
import Appointment from './Appointment';
const MyAppointments = () => {
    const [status, setStatus] = useState("Pending")
    const onStatusChange = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value)
    }
    const context = useContext(AppointmentContext)
    const { getAppointments, appointments } = context
    const navigate = useNavigate();
    useEffect(() => {
        getAppointments()
    }, [])
    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1 className='text-light'>Booked appointments.</h1>
                    </div>

                </div>
                <div className='mad center'>
                    <div className="col-md-6">
                        <label htmlFor="state" className="form-label text-light d-flex">Status
                        </label>
                        <select onChange={onStatusChange} id="servicetype" name='servicetype' className="form-select">
                            <option >Pending</option>
                            <option>Completed</option>
                            <option>Canceled</option>
                        </select>
                    </div>
                </div>
                <div className='mad center'>

                    <div style={{ width: "700px" }}>
                        {appointments.length ? appointments.map((appointment) => {
                            return appointment.status === status && <><Appointment appointment={appointment} /></>
                        })
                            : <h2 style={{ color: "white" }}>No Appointments available</h2>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default MyAppointments