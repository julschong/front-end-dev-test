import './FeatureIcon.scss';

const FeatureIcon = ({ SVGElement, label }) => {
    return (
        <div className="icon-container">
            <div className="icon-wrapper">
                <SVGElement />
            </div>
            <p>{label}</p>
        </div>
    );
};

export default FeatureIcon;
