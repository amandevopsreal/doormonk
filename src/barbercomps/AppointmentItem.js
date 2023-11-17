import React from 'react'
import "/Users/aman/doormonk/src/components/ShopItem.css"

const AppointmentItem = ({ appointment }) => {
    
    return (
        <>
            <div style={{ textAlign: "left" }} className="card my-3">
                <h5 className="card-header"><i class="fa-solid fa-shop head-icon"> Appointment Details</i></h5>
                <div className="card-body">
                    <h5 className="card-title">{appointment.name}</h5>
                    <p style={{
                        color: `${appointment
                            .status === "Canceled" ? "red" : appointment
                                .status === "Pending" ? "blue" : "green"}`
                    }} className="card-text"><span className='b'>Booking Status</span>{": " + appointment.status}</p>
                    <p className="card-text"><span className='b'>Address</span>{": " + appointment.address}</p>
                    <p className="card-text"><span className='b'>Services</span>{": " + appointment.services}</p>
                    <p className="card-text"><span className='b'>Phone</span>{": " + appointment.phone}</p>
                    <p className="card-text"><span className='b'>Email</span>{": " + appointment.email}</p>

                    <p className="card-text"><span className='b'>Slot Date</span>{": " + appointment.date}</p>
                    <p className="card-text"><span className='b'>Slot Time</span>{": " + appointment.time}</p>
                    <p className="card-text"><span className='b'>Unique Booking Id</span>{": " + appointment.bookingid}</p>
                    <p className="card-text"><span className='b'>Barber's Name</span>{": " + appointment.barbername}</p>
                    <p className="card-text"><span className='b'>Barber's Phone</span>{": " + appointment.barberphone}</p>
                    <p className="card-text"><span className='b'>Website</span>{": " + appointment.barberwebsite}</p>
                    <p className="card-text"><span className='b'>Barber's Email</span>{": " + appointment.barberemail}</p>
                    <p className="card-text"><span className='b'>Barber's Address</span>{": " + appointment.barberaddress}</p>
                    <p className="card-text"><span className='b'>Service Type</span>{": " + appointment.servicetype}</p>


                    





                </div>
            </div>





        </>
    )
}

export default AppointmentItem