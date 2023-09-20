import React from 'react'
import "./ShopItem.css"


const ShopItem = ({ shop, onBook }) => {

    return (
        <>
            <div style={{ textAlign: "left" }} className="card my-3">
                <h5 className="card-header"><i class="fa-solid fa-shop head-icon"> Shop</i></h5>
                <div className="card-body">
                    <h5 className="card-title">{shop.name}</h5>
                    <p className="card-text"><i class="fa-solid fa-star rating-icon"></i> Ratings</p>
                    <p className="card-text"><span className='b'>Address</span>{": " + shop.address}</p>
                    <p className="card-text"><span className='b'>Type</span>{": " + shop.type}</p>
                    <p className="card-text"><span className='b'>Phone</span>{": " + shop.phone}</p>
                    <p className="card-text"><span className='b'>Website</span>{": " + shop.website}</p>
                    <p className="card-text"><span className='b'>Email</span>{": " + shop.email}</p>
                    <p className="card-text"><span className='b'>Working hours</span>{": " + shop.workinghours}</p>
                    <button onClick={() => onBook(shop._id)} style={{ borderRadius: "0.375rem" }} className="book-btn btn btn-primary ">Book</button>
                    <button style={{ borderRadius: "0.375rem" }} className="price-btn btn btn-primary mx-2">View Prices</button>
                </div>
            </div>





        </>
    )
}

export default ShopItem