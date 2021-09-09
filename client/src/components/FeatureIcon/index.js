import { useEffect, useRef, useState } from 'react';
import { BACKEND_URL } from '../../config/config';
import useOnScreen from '../../hooks/onScreenHook';
import './FeatureIcon.scss';

const FeatureIcon = ({ iconData }) => {
    const ref = useRef();
    const [viewed, setViewed] = useState(false);
    const isVisible = useOnScreen(ref);
    const { icon, caption, animatecss } = iconData;

    useEffect(() => {
        if (isVisible && !viewed) {
            setViewed(true);
        }
    }, [isVisible, viewed]);

    return (
        <div className="icon-container">
            <div
                ref={ref}
                className={`icon-wrapper animate__animated animate__${
                    viewed && animatecss
                }`}
            >
                <img src={`${BACKEND_URL + icon.url}`} alt="" />
            </div>
            <p>{caption}</p>
        </div>
    );
};

export default FeatureIcon;
