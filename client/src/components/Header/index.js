import './Header.scss';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { HomeContext } from '../../store/HomeContext';
import { useContext } from 'react';
import { BACKEND_URL } from './../../config/config';

const Header = () => {
    const { homeData } = useContext(HomeContext);
    const { heroImage, title, subtitle, linkURL, buttonText } =
        homeData.data.hero;
    const { logo } = homeData.data;

    return (
        <header
            id="header"
            style={{
                backgroundImage: `url("${BACKEND_URL}${heroImage.url}")`
            }}
        >
            <a href="/" className="page-padding">
                <img src={BACKEND_URL + logo.url} className="logo" alt="logo" />
            </a>
            <div className="animate__animated animate__fadeIn animate__delay-1s hero-title-container">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <button
                    className="custom-btn"
                    onClick={() => {
                        window.open(`${linkURL}`);
                    }}
                >
                    {buttonText}
                </button>
            </div>
            <BsChevronDoubleDown
                className="more-arrow animate__animated animate__heartBeat animate__infinite"
                size={40}
            />
        </header>
    );
};

export default Header;
