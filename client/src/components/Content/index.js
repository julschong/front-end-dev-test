import './Content.scss';
import { useContext } from 'react';
import { HomeContext } from './../../store/HomeContext';
import { BACKEND_URL } from '../../config/config';

const Content = () => {
    const { homeData } = useContext(HomeContext);
    const { title, subtitle, linkURL, linkText, contentImage } =
        homeData.data.content;

    return (
        <section id="content" className="content-container split">
            <div className="flex-column content-left page-padding">
                <h2 className="h2-font">{title}</h2>
                <p className="detail-font">{subtitle}</p>
                <a className="detail-link" href={`${linkURL}`}>
                    {`> ${linkText}`}
                </a>
            </div>
            <img
                id="content-image"
                src={`${BACKEND_URL}${contentImage.url}`}
                alt="silhouette of a friend helping another mountain climbing"
                loading="lazy"
            />
        </section>
    );
};

export default Content;
