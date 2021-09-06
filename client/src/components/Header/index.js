import { ReactComponent as Logo } from '../../assets/logo-white.svg';
import './Header.scss';
import { BsChevronDoubleDown } from 'react-icons/bs';

const Header = () => {
    return (
        <header id="header">
            <a href="/" className="page-padding">
                <Logo className="logo" title="" />
            </a>
            <div className="animate__animated animate__fadeIn animate__delay-1s hero-title-container">
                <h1>WELCOME TO</h1>
                <p>Rooster Grin</p>
                <button
                    className="custom-btn"
                    onClick={() => {
                        window.location.href = 'https://www.roostergrin.com/';
                    }}
                >
                    BUTTON BUTTON
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
