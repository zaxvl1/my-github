import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Deals from './components/Deals';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Deals />
            <HowItWorks />
            <Footer />
        </div>
    );
};

export default App;
