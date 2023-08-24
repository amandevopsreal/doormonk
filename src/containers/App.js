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
import Barberlogin from "../barbercomps/Barberlogin/Barberlogin";
import Barberregister from "../barbercomps/Barberregister/Barberregister";
import NavigationBP from "../components/Navigation/NavigationBP";
import NavigationCS from "../components/Navigation/NavigationCS";
import Shops from "../components/Shops";
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



                        <Routes>
                            <Route path='/' element={<><Navigation />
                                <Login loadUser={this.loadUser} /></>} />
                            <Route path='/signin' element={<><Navigation /><Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange} /></>} />
                            <Route path='/barberlogin' element={<><NavigationBP /><Barberlogin /></>} />
                            <Route path='/barberregister' element={<><NavigationBP /><Barberregister /></>} />


                            <Route path='/home' element={<>
                                <NavigationCS />
                                <Logo />
                                <Searchbox onSearchChange={this.onSearchChange} />
                                <ErrorBoundary>
                                    <ServiceList services={searchedServices} />
                                </ErrorBoundary></>} />
                            <Route path='/searchshops' element={<>
                                <NavigationCS />
                                <Shops /></>} />

                        </Routes>

                    </div >
                </Router>
            );
        }

    }
}

export default App;