import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="flex-column-center">
            <p>Follow Us:</p>
            <div className="follow-us-icon-group">
                <InstagramIcon height={43} />
                <a
                    href="https://www.facebook.com/RoosterGrin/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FacebookIcon
                        height={43}
                        href="https://www.roostergrin.com/"
                        target="_blank"
                        rel="noreferrer"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
