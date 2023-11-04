import React, { useEffect } from 'react'

const Reviews = () => {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1 className='text-light'>Recent Ratings and Reviews</h1>
                    </div>

                </div>
                <div className='mad center'>

                    <div style={{ width: "700px" }}>
                        {/*{appointments.length ? appointments.map((appointment) => {
                            return appointment.status === status && <><Appointment updateAppointment={updateAppointment} reviewAppointment={reviewAppointment} key={appointment._id} appointment={appointment} /></>
                        })
                            : <h2 style={{ color: "white" }}>No Reviews available</h2>}*/}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Reviews