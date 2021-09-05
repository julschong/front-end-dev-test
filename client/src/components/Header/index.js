import { ReactComponent as Logo } from '../../assets/logo-white.svg';
import './Header.scss';
import { BsChevronDoubleDown } from 'react-icons/bs';

const Header = () => {
    return (
        <header id="header" className="grid">
            <a className="logo" href="/">
                <Logo />
            </a>
            <div className="flex-column-center span-all-grid animate__animated animate__fadeIn animate__delay-1s">
                <h1>WELCOME TO</h1>
                <p>Rooster Grin</p>
                <button className="custom-btn">BUTTON BUTTON</button>
            </div>
            <BsChevronDoubleDown
                className="more-arrow animate__animated animate__heartBeat animate__infinite"
                size={40}
            />
        </header>
    );
};

export default Header;
