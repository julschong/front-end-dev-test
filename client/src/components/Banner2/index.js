import { useContext } from 'react';
import { BACKEND_URL } from '../../config/config';
import { HomeContext } from '../../store/HomeContext';
import './Banner2.scss';

const BannerCTA = () => {
    const { homeData } = useContext(HomeContext);
    const { title, subtitle, bannerImage, buttonText } =
        homeData.data.banner[1];
    return (
        <section
            id="banner2"
            className="banner"
            style={{
                backgroundImage: `url("${BACKEND_URL + bannerImage.url}")`
            }}
        >
            <div className="cta-container page-padding">
                <h2 className="h2-font">{title}</h2>
                <p className="detail-font">{subtitle}</p>
                <button
                    className="custom-btn"
                    onClick={() => {
                        window.alert('Banner 2 button clicked');
                    }}
                >
                    {buttonText}
                </button>
            </div>
        </section>
    );
};

export default BannerCTA;
