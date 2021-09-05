import { ReactComponent as Logo } from '../../assets/logo-white.svg';
import './Header.scss';

const Header = () => {
    return (
        <header className="grid">
            <Logo className="logo" />
            <div className="flex-column-center span-all-grid">
                <h1>WELCOME TO</h1>
                <p>Rooster Grin</p>
                <button className="custom-btn">BUTTON BUTTON</button>
            </div>
        </header>
    );
};

export default Header;
