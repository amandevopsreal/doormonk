import React, { useState } from 'react'
import './Barberregister.css'
import { useNavigate } from 'react-router-dom'
import Barberregister2 from './Barberregister2'
const Barberregister = () => {
    const [barber, setBarber] = useState({
        name: "",
        phone: "",
        website: "",
        type: "",
        email: "",
        password: "",
        address: "",
        city: "",
        state: "",
        fromworkinghours: "",
        toworkinghours: "",
        zip: 0
    })
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/barberhome");
    }
    const handelSubmit = async () => {
        console.log(barber)
        const response = await fetch("http://localhost:5000/api/barberauth/createbarber", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(barber)
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            localStorage.setItem("token", json.authtoken)
            handleClick()
        }
        else {

        }
    }
    const onChange = (e) => {
        setBarber({
            ...barber,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='container h-100'>
            <div className='row'>
                <div className='col-md-4'>
                    <h1 className='text-light'>Earn More. Earn Easily</h1>
                </div>

            </div>
            <div className='container my-3'>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="d-flex form-label text-light">Salon Name</label>
                        <input onChange={onChange} type="text" className="form-control" id="name" name='name' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="d-flex form-label text-light">Phone</label>
                        <input onChange={onChange} name='phone' type="text" className="form-control" id="phone" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="website" className="d-flex form-label text-light">Website</label>
                        <input onChange={onChange} type="text" className="form-control" id="website" name='website' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="type" className="form-label text-light d-flex">Type</label>
                        <select onChange={onChange} id="type" name='type' className="form-select">
                            <option value>Choose...</option>
                            <option>Men</option>
                            <option>Women</option>
                            <option>Unisex</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="d-flex form-label text-light">Email</label>
                        <input onChange={onChange} type="email" className="form-control" id="email" name='email' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="d-flex form-label text-light">Password</label>
                        <input onChange={onChange} type="password" className="form-control" id="password" name='password' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="address" className="form-label d-flex text-light">Address</label>
                        <input onChange={onChange} type="text" className="form-control" id="address" name='address' />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label text-light d-flex">City</label>
                        <input onChange={onChange} type="text" className="form-control" id="city" name='city' />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="state" className="form-label text-light d-flex">State</label>
                        <select onChange={onChange} id="state" name='state' className="form-select">
                            <option value>Choose...</option>
                            <option>Uttarakhand</option>
                            <option>Uttar Pradesh</option>
                            <option>Delhi</option>
                            <option>Bihar</option>
                            <option>....</option>
                            {/*"Use map in future"*/}
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="zip" className="form-label text-light d-flex">Zip</label>
                        <input onChange={onChange} type="text" className="form-control" id="zip" name='zip' />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="workinghours" className="d-flex form-label text-light">Working Hours From</label>
                        <input onChange={onChange} className="form-control" type="time" id="fromworkinghhours" name="fromworkinghhours"></input>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="workinghours" className="d-flex form-label text-light">To</label>
                        <input onChange={onChange} className="form-control" type="time" id="toworkinghhours" name="toworkinghhours"></input>
                    </div>
                    <Barberregister2 />
                    <div className="col-12">
                        <button onClick={handelSubmit} type="submit" className="btn btn-primary grow">Next</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Barberregister