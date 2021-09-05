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
            <BannerCTA
                bannerURL={bannerImage1}
                bannerId="banner1"
                gridStart={1}
                gridEnd={2}
            />
            <Features />
            <BannerCTA
                bannerURL={bannerImage2}
                bannerId="banner2"
                gridStart={2}
                gridEnd={3}
                detail="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, et iusto? Minus, accusantium qui saepe assumenda
                    sequi, quam id expedita, vel voluptatem dignissimos labore
                    quidem."
                shiftX="150px"
            />
            <Testimonial />
            <Footer />
        </>
    );
};

export default App;
