import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Navigation.css";

const fun=()=>{
    const dropDownMenu=document.querySelector('.dropdown_menu');
    const toggleBtnIcon=document.querySelector('.toggle_btn i');
    dropDownMenu.classList.toggle('open');
    const isOpen=dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList=isOpen?
    'fa-solid fa-xmark'
    :'fa-solid fa-bars'
    
}
const Navigation = () => {
    return (
        <header className="view">
            <div className="navbar">
                <div className="logo"><a href="#" >DoormonK</a></div>
                <ul className="links">
                    <li><a href="#">Register as Barber</a></li>
                    <li><a href="#">Login/Sign Up</a></li>
                </ul>
                <div className="toggle_btn"  onClick={fun}>
                    <i className="fa-solid fa-bars"></i>
                </div>

            </div>
            <div className="dropdown_menu">
                <li><a href="#">Register as Barber</a></li>
                <li><a href="#">Login/Sign Up</a></li>
            </div>
        </header>
    );
}

export default Navigation;