import React, { Component } from 'react';
import Menu from "../menu/Menu";
import HouseCarousel from "../HouseCarousel";
import Marketing from "../Marketing";

class Bolinas extends Component {
    componentDidMount() {
        document.title = "Bolinas Property Management | Dipsea Management";
    } 
    render() { 
        return ( 
            <React.Fragment>
                <Menu placement="top" />
                <HouseCarousel page="Bolinas"/>
                <Marketing page="Bolinas"/>
                <Menu placement="bottom" /> 
            </React.Fragment>
        );
    }
}
 
export default Bolinas;
