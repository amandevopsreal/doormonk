import React, { Component } from "react";
import { Services } from '../Services';
import ServiceList from "../components/ServiceList";
import Searchbox from "../components/Searchbox";
import ErrorBoundary from "../components/ErrorBoundary";
import Navigation from "../components/Navigation/Navigation";
import Login from "../components/Signup/Login";
import Signup from "../components/Signup/Signup";
import Logo from "../components/Logo/Logo";
import "./App.css";
import Footer from "../components/Footer/Footer";
class App extends Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            services: Services,
            route: "login",
            isSignedIn:false,
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });

    }
    onRouteChange = (route) => {
        if(route==="login")
        {
            this.setState({isSignedIn:false})
        }
        else if(route==="home")
        {
            this.setState({isSignedIn:true})
        }
        this.setState({ route: route });
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
                <div className="tc">
                    <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />

                    {this.state.route === "home" ?
                        <>
                            <Logo />
                            <Searchbox onSearchChange={this.onSearchChange} />
                            <ErrorBoundary>
                                <ServiceList services={searchedServices} />
                            </ErrorBoundary>
                        </>
                        :
                        (this.state.route === "login" ?
                            <>
                                <Login onRouteChange={this.onRouteChange} />
                            </> :
                            <>
                                <Signup onRouteChange={this.onRouteChange} />
                            </>

                        )


                    }
                    <Footer />
                </div >
            );
        }

    }
}

export default App;