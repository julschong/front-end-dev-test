import './Footer.scss';
import { HomeContext } from './../../store/HomeContext';
import { useContext } from 'react';
import { BACKEND_URL } from './../../config/config';

const Footer = () => {
    const { homeData } = useContext(HomeContext);
    const { closeText, socialMediaIcon } = homeData.data.footer;

    return (
        <footer id="footer">
            <p>{closeText}</p>
            <div className="follow-us-icon-group">
                {socialMediaIcon.map((icon, i) => (
                    <a
                        href={icon.linkURL}
                        target="_blank"
                        rel="noreferrer"
                        key={icon.name + ' link'}
                    >
                        <img
                            src={BACKEND_URL + icon.mediaIcon.url}
                            height={43}
                            alt={icon.name}
                        />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
