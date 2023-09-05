import React, { useState } from 'react'
import 'C:/Users/HP/doormonk/src/barbercomps/Barberregister/Barberregister.css'
/*import { useNavigate } from 'react-router-dom'*/
import { useContext } from 'react'
import AppointmentContext from '../context/appointmentContext';
const BookingDetails = ({ id }) => {
    const [details, setDetails] = useState({
        name: "",
        phone: "",
        services: "",
        email: "",
        address: "",
        time: "",
    })
    const context = useContext(AppointmentContext)
    const { addAppointment } = context
    /*const navigate = useNavigate();*/
    /*const handleClick = () => {
        navigate("/barberhome");
    }*/
    const handelSubmit = async () => {
        addAppointment(details.name, details.phone, details.services, details.email, details.address, details.time)
        /*const response = await fetch("http://localhost:5000/api/barberauth/createbarber", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(details)
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            localStorage.setItem("token", json.authtoken)
            handleClick()
        }
        else {

        }*/
    }
    const onChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='container h-100'>
            <div className='row'>
                <div className='col-md-4'>
                    <h1 className='text-light'>Enter the details below.</h1>
                </div>

            </div>
            <div className='container my-3'>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="d-flex form-label text-light">Name</label>
                        <input onChange={onChange} type="text" className="form-control" id="name" name='name' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="d-flex form-label text-light">Phone</label>
                        <input onChange={onChange} name='phone' type="text" className="form-control" id="phone" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="services" className="d-flex form-label text-light">Services</label>
                        <input onChange={onChange} type="text" className="form-control" id="services" name='services' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="d-flex form-label text-light">Email</label>
                        <input onChange={onChange} type="email" className="form-control" id="email" name='email' />
                    </div>
                    <div className="col-6">
                        <label htmlFor="address" className="form-label d-flex text-light">Address</label>
                        <input onChange={onChange} type="text" className="form-control" id="address" name='address' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="time" className="d-flex form-label text-light">Time</label>
                        <input onChange={onChange} type="text" className="form-control" id="time" name="time" />
                    </div>
                    <div className="col-12">
                        <button onClick={handelSubmit} type="submit" className="btn btn-primary grow">Book</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingDetails