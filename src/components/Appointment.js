import React from 'react'
const Appointment = ({ appointment }) => {
    return (
        <>
            <>
                <div style={{ textAlign: "left" }} className="card my-3">
                    <h5 className="card-header">{"Appointment Details"}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{"Name: " + appointment.name}</h5>
                        <p className="card-text">{"Address: " + appointment.address}</p>
                        <p className="card-text">{"Services: " + appointment.services}</p>
                        <p className="card-text">{"Phone: " + appointment.phone}</p>
                        <p className="card-text">{"Email: " + appointment.email}</p>
                        <p className="card-text">{"Time: " + appointment.time}</p>

                    </div>
                </div>
            </></>
    )
}

export default Appointment