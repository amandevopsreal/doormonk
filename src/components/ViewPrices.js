import React, { useEffect, useState, } from 'react'


const ViewPrices = () => {
    const [prices, setPrices] = useState([])
    useEffect(() => {

        const onSearch = async () => {
            const response = await fetch(`http://localhost:5000/api/shops/fetchprices`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({ id: localStorage.getItem("id") }),
            });
            const json = await response.json()
            console.log(json)
            setPrices(json)
        }
        onSearch()
    }, [])
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Services/Prices</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {
                                    prices.map(service => {
                                        return (<p>{Object.keys(service)[0]}:{Object.values(service)}</p>)
                                    })
                                }
                            </div>
                            <div className="modal-footer">
                                <button data-bs-dismiss="modal" style={{ borderRadius: "0.375rem" }} className="price-btn btn btn-primary mx-2">Close</button>


                            </div>
                        </div>
                    </div>
                </div>

            </div></>
    )
}

export default ViewPrices