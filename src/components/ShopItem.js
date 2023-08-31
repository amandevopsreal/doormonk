import React from 'react'
import { Services } from '../Services'

const ShopItem = ({ shop }) => {
    return (
        <>
            <div style={{ textAlign: "left" }} className="card my-3">
                <h5 className="card-header">{shop.name}</h5>
                <div className="card-body">
                    <h5 className="card-title">{"Services: " + shop.services}</h5>
                    <p className="card-text">{"Address: " + shop.address}</p>
                    <p className="card-text">{"Type: " + shop.type}</p>
                    <p className="card-text">{"Phone: " + shop.phone}</p>
                    <p className="card-text">{"Website: " + shop.website}</p>
                    <p className="card-text">{"Email: " + shop.email}</p>
                    <p className="card-text">{"Working Hours: " + shop.workingHours}</p>
                    <a style={{ backgroundColor: "#0d6efd", borderRadius: "0.375rem" }} href="/" className="btn btn-primary">Book</a>
                </div>
            </div>
        </>
    )
}

export default ShopItem