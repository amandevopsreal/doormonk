import React, { Component } from "react";
import { Services } from '../Services';
import ServiceList from "../components/ServiceList";
import Searchbox from "../components/Searchbox";
import ErrorBoundary from "../components/ErrorBoundary";
import Navigation from "../components/Navigation/Navigation";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Logo from "../components/Logo/Logo";
import "./App.css";
import Footer from "../components/Footer/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
class App extends Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            services: Services,
            isSignedIn: false,
            user: {
                id: "",
                name: "",
                email: "",
                joined: ''
            }
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });

    }
    onRouteChange = (route) => {
        if (route === "login") {
            this.setState({ isSignedIn: false })
        }
        else if (route === "home") {
            this.setState({ isSignedIn: true })
        }
    }
    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                joined: data.joined
            }
        })
    }
    render() {

        const searchedServices = this.state.services.filter((service) => {
            return service.service.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.services.length === 0) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <Router>
                    <div className="tc">
                        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />


                        <Routes>
                            <Route path='/' element={<Login loadUser={this.loadUser} onRouteChange={this.onRouteChange} />} />
                            <Route path='/signup' element={<Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange} />} />
                            <Route path='/home' element={<>
                                <Logo />
                                <Searchbox onSearchChange={this.onSearchChange} />
                                <ErrorBoundary>
                                    <ServiceList services={searchedServices} />
                                </ErrorBoundary></>} />

                        </Routes>
                        <Footer />
                    </div >
                </Router>
            );
        }

    }
}

export default App;