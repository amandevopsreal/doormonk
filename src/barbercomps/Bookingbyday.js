import React, { useState } from 'react'
import AppointmentItem from './AppointmentItem'
const Bookingbyday = () => {
    const onDateChange=async(e)=>{
        const response = await fetch("http://localhost:5000/api/shops/fetchappbyday", {
            method: "post",
            headers: { "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token") },
            body: JSON.stringify({date:e.target.value })
        })
        const json = await response.json()
        setAppointments(json)
    }
    const [appointments,setAppointments]=useState([])
  return (
    <>
        <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1 className='text-light'>Pending Bookings</h1>
                    </div>

                </div>
                <div className=' mad center'>

                    <div style={{ width: "700px" }}>
                    <div className='row my-3'>
                    <div className='col-md-12'>
                        <h2 className='text-light'>Enter day to see bookings</h2>
                    </div>

                </div>
                        <div className="input-group mb-3">
                            <input className="form-control" type="time" id="appt" name="appt"></input>
                            <input onChange={onDateChange} className="form-control" type="date" id="birthday" name="birthday"></input>
                        </div>
                    </div>
                </div>
                <div className='mad center'>
                    <div style={{ width: "700px" }}>
                        {appointments.length ? appointments.map((appointment, i) => {
                            return <><AppointmentItem key={i} appointment={appointment} /></>
                        })
                            : <h2 style={{ color: "white" }}>No Bookings available</h2>}
                    </div>
                </div>
        </div>
    </>
  )
}

export default Bookingbyday