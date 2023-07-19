import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Navigation.css";
import { Link } from "react-router-dom";

const fun = () => {
    const dropDownMenu = document.querySelector('.dropdown_menu');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ?
        'fa-solid fa-xmark'
        : 'fa-solid fa-bars'

}
const Navigation = ({ onRouteChange, isSignedIn }) => {


    if (isSignedIn) {
        return (
            <header className="view">
                <div className="navbar">
                    <div className="logo"><a href="/#" >DoormonK</a></div>
                    <ul className="links">

                        <li><Link onClick={() => onRouteChange("login")} to="/">Log out</Link></li>
                    </ul>
                    <div className="toggle_btn" onClick={fun}>
                        <i className="fa-solid fa-bars"></i>
                    </div>

                </div>
                <div className="dropdown_menu">

                    <li><Link onClick={() => onRouteChange("login")} to="/">Log out</Link></li>
                </div>
            </header>
        );
    }
    else {
        return (
            <header className="view">
                <div className="navbar">
                    <div className="logo"><a href="/#" >DoormonK</a></div>
                    <ul className="links">
                        <li><a onClick={() => onRouteChange("")} href="/#">Barber's Portal</a></li>
                        <li><Link to="/">Log in/ Sign up</Link></li>
                    </ul>
                    <div className="toggle_btn" onClick={fun}>
                        <i className="fa-solid fa-bars"></i>
                    </div>

                </div>
                <div className="dropdown_menu">
                    <li><a onClick={() => onRouteChange("")} href="/#">Barber's Portal</a></li>
                    <li><Link to="/">Log in/ Sign up</Link></li>
                </div>
            </header>
        );
    }


}

export default Navigation;