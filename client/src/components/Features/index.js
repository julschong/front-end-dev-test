import FeatureIcon from '../FeatureIcon';
import './Features.scss';

import { useContext } from 'react';
import { HomeContext } from './../../store/HomeContext';

const Features = () => {
    const { homeData } = useContext(HomeContext);
    const { title, subtitle, linkURL, linkText, iconGroup } =
        homeData.data.feature;

    return (
        <section id="features" className="split feature-container">
            <div className="feature-left page-padding">
                <h2 className="h2-font">{title}</h2>
                <p className="detail-font">{subtitle}</p>
                <a className="detail-link" href={linkURL}>
                    {'>'} {linkText}
                </a>
            </div>
            <div className="feature-icons-container">
                <div className="feature-icons-group">
                    {iconGroup.map((iconData, i) => (
                        <FeatureIcon
                            iconData={iconData}
                            key={`${iconData.caption + i}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
