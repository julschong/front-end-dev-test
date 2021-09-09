import { ReactComponent as Logo } from '../../assets/logo-white.svg';
import './Header.scss';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { HomeContext } from '../../store/HomeContext';
import { useContext } from 'react';
import { BACKEND_URL } from './../../config/config';

const Header = () => {
    const { homeData } = useContext(HomeContext);
    const hero = homeData.data.hero;

    return (
        <header
            id="header"
            style={{
                backgroundImage: `url("${BACKEND_URL}${hero.heroImage.url}")`
            }}
        >
            <a href="/" className="page-padding">
                <Logo className="logo" title="" />
            </a>
            <div className="animate__animated animate__fadeIn animate__delay-1s hero-title-container">
                <h1>{hero.title}</h1>
                <p>{hero.subtitle}</p>
                <button
                    className="custom-btn"
                    onClick={() => {
                        window.location.href = `${hero.linkURL}`;
                    }}
                >
                    {hero.buttonText}
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
