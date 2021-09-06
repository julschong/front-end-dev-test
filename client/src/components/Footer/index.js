import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';

import './Footer.scss';

const Footer = () => {
    return (
        <footer id="footer">
            <p>Follow Us:</p>
            <div className="follow-us-icon-group">
                <a
                    href="https://www.roostergrin.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <InstagramIcon height={43} />
                </a>
                <a
                    href="https://www.facebook.com/RoosterGrin/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FacebookIcon height={43} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
