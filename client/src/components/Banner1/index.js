import './Banner1.scss';
import { useContext } from 'react';
import { HomeContext } from './../../store/HomeContext';
import { BACKEND_URL } from '../../config/config';

const BannerCTA = () => {
    const { homeData } = useContext(HomeContext);
    const { title, bannerImage, buttonText } = homeData.data.banner[0];

    return (
        <section
            id="banner1"
            className="banner"
            style={{
                backgroundImage: `url("${BACKEND_URL}${bannerImage.url}"`
            }}
        >
            <div className="flex-column cta-container page-padding">
                <h2 className="h2-font">{title}</h2>
                <button
                    className="custom-btn"
                    onClick={() => {
                        window.alert('Banner 1 button clicked');
                    }}
                >
                    {buttonText}
                </button>
            </div>
        </section>
    );
};

export default BannerCTA;
