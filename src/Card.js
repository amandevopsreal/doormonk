import React from "react";
import './Card.css';
const Card = ({ link, service }) => {
    return (
        <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="image" src={`${link}`} />
            <div>
                <p>{service}</p>
            </div>
        </div>
    );
}

export default Card;