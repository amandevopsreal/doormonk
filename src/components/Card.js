import React from "react";
import './Card.css';
import { useNavigate } from "react-router-dom";
const Card = ({ link, service }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/searchshops")
    }
    return (
        <div onClick={handleClick} className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="loading" src={`${link}`} />
            <div>
                <p>{service}</p>
            </div>
        </div>
    );
}

export default Card;