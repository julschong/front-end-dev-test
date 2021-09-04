import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="flex-column-center">
            <p>Follow Us:</p>
            <div className="follow-us-icon-group">
                <InstagramIcon height={43} />
                <FacebookIcon height={43} />
            </div>
        </footer>
    );
};

export default Footer;
