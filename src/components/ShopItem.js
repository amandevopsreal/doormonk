import React from 'react'
import "./ShopItem.css"


const ShopItem = ({ shop, onBook }) => {

    return (
        <>
            <div style={{ textAlign: "left" }} className="card my-3">
                <h5 className="card-header"><i class="fa-solid fa-shop"></i></h5>
                <div className="card-body">
                    <h5 className="card-title">{shop.name}</h5>
                    <p className="card-text">{"Address: " + shop.address}</p>
                    <p className="card-text">{"Type: " + shop.type}</p>
                    <p className="card-text">{"Phone: " + shop.phone}</p>
                    <p className="card-text">{"Website: " + shop.website}</p>
                    <p className="card-text">{"Email: " + shop.email}</p>
                    <p className="card-text">{"Working Hours: " + shop.workinghours}</p>
                    <button onClick={() => onBook(shop._id)} style={{ backgroundColor: "#0d6efd", borderRadius: "0.375rem" }} className="btn btn-primary">Book</button>
                </div>
            </div>





        </>
    )
}

export default ShopItem