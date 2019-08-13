import React from 'react';
import Menu from "../menu/Menu";
import HouseCarousel from "../HouseCarousel";
import Marketing from "../Marketing";

const Home = () => {
    return ( 
        <React.Fragment>
            <Menu placement="top" />
            <HouseCarousel page="Home"/>
            <Marketing page="Home"/>
            <Menu placement="bottom" /> 
        </React.Fragment>
    );
}
 
export default Home;