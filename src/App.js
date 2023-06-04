import React, { Component } from "react";
import { Services } from './Services';
import ServiceList from "./ServiceList";
import Searchbox from "./Searchbox";

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
        return (
            <div className="tc">
                <Searchbox onSearchChange={this.onSearchChange}/>
                <ServiceList services={searchedServices} />
            </div>
        );
    }
}

export default App;