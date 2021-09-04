import './App.scss';
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import BannerCTA from './components/BannerCTA';

import bannerImage1 from './assets/banner-1.jpg';
import bannerImage2 from './assets/banner-2.jpg';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header />
            <Content />
            <BannerCTA bannerURL={bannerImage1} gridStart={3} gridEnd={4} />
            <section className="split">
                <div>
                    <h3>LOREM IPSUM DOLOR SIT AMET</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Modi, nam, vero quas commodi nemo corporis
                        laboriosam culpa eligendi, non ipsam ut. Voluptatibus
                        vel aliquam nam.
                    </p>
                    <a>{'>'} Lorem Ipsum</a>
                </div>
                <div>
                    <div>
                        <p>icon1</p>
                        <p>icon1</p>
                    </div>
                    <div>
                        <p>icon2</p>
                        <p>icon2</p>
                    </div>
                    <div>
                        <p>icon3</p>
                        <p>icon3</p>
                    </div>
                    <div>
                        <p>icon4</p>
                        <p>icon4</p>
                    </div>
                </div>
            </section>
            <BannerCTA bannerURL={bannerImage2} gridStart={5} gridEnd={6} />
            <section className="split">
                <div>
                    <h3>LOREM IPSUM DOLOR SIT AMET</h3>
                    <p>stars</p>
                </div>
                <div>
                    <h4>John Doe 08/08/2019</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Temporibus sed a cupiditate, est nihil debitis
                        eligendi provident repellat modi minima esse. Rerum ea
                        cum quis, esse voluptatem harum earum in culpa nisi
                        aliquid. Reiciendis impedit officia numquam tempora enim
                        pariatur deleniti sit repellat eligendi quidem nulla
                        exercitationem error tenetur, consectetur totam qui iste
                        ad ducimus officiis illo maxime voluptate magni.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default App;
