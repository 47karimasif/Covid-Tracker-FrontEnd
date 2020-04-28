import React from 'react';
import LightBulb from './LightBulb';
import Home from './Home';
import About from './About';
import Symptoms from './Symptoms';
import Prevention from './Prevention';
import SaveLives from './SaveLives';
import Footer from './Footer';

const Landing = () => {
    return (
        <div>
            <LightBulb />
            <Home />
            <About />
            <Symptoms />
            <Prevention />
            <SaveLives />
            <Footer />
        </div>
    )
}

export default Landing;