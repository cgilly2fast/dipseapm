import React, { Component } from 'react';
import Menu from "../menu/Menu";
import HouseCarousel from "../HouseCarousel";
import Marketing from "../Marketing";

class StinsonBeach extends Component {
    componentDidMount() {
        document.title = "Stinson Beach Property Management | Dipsea Management";
    } 
    render() { 
        return ( 
            <React.Fragment>
                <Menu placement="top" />
                <HouseCarousel page="Stinson Beach"/>
                <Marketing page="Stinson Beach"/>
                <Menu placement="bottom" /> 
            </React.Fragment>
        );
    }
}
 
export default StinsonBeach;