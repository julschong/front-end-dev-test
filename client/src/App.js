import React, { useContext, useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Banner1 from './components/Banner1';
import Banner2 from './components/Banner2';
import './App.scss';

import Footer from './components/Footer';
import Features from './components/Features/index';
import Testimonial from './components/Testimonial/index';
import { HomeContext } from './store/HomeContext';

const App = () => {
    const { homeData } = useContext(HomeContext);

    if (homeData.loading) {
        return 'Loading';
    }

    return (
        <div className="grid-container">
            <Header />
            <Content />
            <Banner1 />
            <Features />
            <Banner2 />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default App;
