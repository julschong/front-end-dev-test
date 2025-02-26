import FeatureIcon from '../FeatureIcon';
import './Features.scss';

import { ReactComponent as HomeExpertiseSVG } from '../../assets/home-expertise.svg';
import { ReactComponent as HomeHygeine } from '../../assets/home-hygiene.svg';
import { ReactComponent as HomeLab } from '../../assets/home-lab.svg';
import { ReactComponent as HomeRetention } from '../../assets/home-retention.svg';

const Features = () => {
    return (
        <section id="features" className="split feature-container">
            <div className="feature-left page-padding">
                <h2 className="h2-font">LOREM IPSUM DOLOR SIT AMET</h2>
                <p className="detail-font">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, nam, vero quas commodi nemo corporis laboriosam culpa
                    eligendi, non ipsam ut. Voluptatibus vel aliquam nam.
                </p>
                <a className="detail-link" href="#banner2">
                    {'>'} Lorem Ipsum
                </a>
            </div>
            <div className="feature-icons-container">
                <div className="feature-icons-group">
                    <FeatureIcon
                        SVGElement={HomeExpertiseSVG}
                        label="LOREM"
                        animatecss="tada"
                    />
                    <FeatureIcon
                        SVGElement={HomeHygeine}
                        label="LOREM IPSUM"
                        animatecss="jello"
                    />
                    <FeatureIcon
                        SVGElement={HomeLab}
                        label="LOREM IPSUM"
                        animatecss="rubberBand"
                    />
                    <FeatureIcon
                        SVGElement={HomeRetention}
                        label="LOREM"
                        animatecss="swing"
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
