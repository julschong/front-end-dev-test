import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import BannerCTA from './components/BannerCTA';

import bannerImage1 from './assets/banner-1.jpg';
import bannerImage2 from './assets/banner-2.jpg';
import Footer from './components/Footer';
import Features from './components/Features/index';
import Testimonial from './components/Testimonial/index';

const App = () => {
    return (
        <>
            <Header />
            <Content />
            <BannerCTA bannerURL={bannerImage1} gridStart={3} gridEnd={4} />
            <Features />
            <BannerCTA bannerURL={bannerImage2} gridStart={5} gridEnd={6} />
            <Testimonial />
            <Footer />
        </>
    );
};

export default App;
