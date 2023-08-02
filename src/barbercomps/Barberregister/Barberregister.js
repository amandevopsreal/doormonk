import React from 'react'
import './Barberregister.css'
const Barberregister = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h1 className='text-light'>Earn More. Earn Easily</h1>
                </div>

            </div>
            <div className='container my-3'>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="d-flex form-label text-light">Salon Name</label>
                        <input type="name" className="form-control" id="inputName" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputType" className="form-label text-light d-flex">Type</label>
                        <select id="inputType" className="form-select">
                            <option value>Choose...</option>
                            <option>Men</option>
                            <option>Women</option>
                            <option>Uniex</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="d-flex form-label text-light">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="d-flex form-label text-light">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label d-flex text-light">Address</label>
                        <input type="text" className="form-control" id="inputAddress" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label text-light d-flex">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label text-light d-flex">State</label>
                        <select id="inputState" className="form-select">
                            <option value>Choose...</option>
                            <option>Uttar Pradesh</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label text-light d-flex">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary grow">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Barberregister