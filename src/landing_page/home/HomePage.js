import React from 'react';
import Award from './Award';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Hero from './Hero';
import Stats from './Stats';
import Navbar from '../Navbar';
import Footer from '../Footer';
function HomePage() {
    return ( 
        <>
       
        <Hero />
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;