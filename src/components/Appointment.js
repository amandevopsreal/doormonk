import React from 'react'
import "./ShopItem.css"
const Appointment = ({ appointment }) => {
    return (

        <>


            <div style={{ textAlign: "left" }} className="card my-3">
                <h5 className="card-header"><i class="fa-solid fa-shop head-icon"> Appointment Details</i></h5>
                <div className="card-body">
                    <h5 className="card-title">{appointment.name}</h5>
                    <p className="card-text"><span className='b'>Address</span>{": " + appointment.address}</p>
                    <p className="card-text"><span className='b'>Services</span>{": " + appointment.services}</p>
                    <p className="card-text"><span className='b'>Phone</span>{": " + appointment.phone}</p>
                    <p className="card-text"><span className='b'>Email</span>{": " + appointment.email}</p>
                    <p className="card-text"><span className='b'>Time</span>{": " + appointment.time}</p>

                </div>
            </div>
        </>
    )
}

export default Appointment