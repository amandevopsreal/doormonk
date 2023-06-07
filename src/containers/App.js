import React, { Component } from "react";
import { Services } from '../Services';
import ServiceList from "../components/ServiceList";
import Searchbox from "../components/Searchbox";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor()
    {
        super();
        this.state={
            searchField:'',
            services:Services,
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value});
        
    }
    render() {

        const searchedServices=this.state.services.filter((service)=>{
            return service.service.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if(this.state.services.length===0)
        {
            return <h1>Loading</h1>
        }
        else
        {
            return (
                <div className="tc">
                    <Searchbox onSearchChange={this.onSearchChange}/>
                    <ErrorBoundary>
                    <ServiceList services={searchedServices}/>
                    </ErrorBoundary>
                </div>
            );
        }
        
    }
}

export default App;