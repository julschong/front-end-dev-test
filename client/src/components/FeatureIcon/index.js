import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../../hooks/onScreenHook';
import './FeatureIcon.scss';

const FeatureIcon = ({ SVGElement, label, animatecss }) => {
    const ref = useRef();
    const [viewed, setViewed] = useState(false);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible && !viewed) {
            setViewed(true);
            console.log(true);
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
                <SVGElement />
            </div>
            <p>{label}</p>
        </div>
    );
};

export default FeatureIcon;
