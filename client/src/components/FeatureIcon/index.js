import './FeatureIcon.scss';

const FeatureIcon = ({ SVGElement, label }) => {
    return (
        <div className="icon-container flex-column-center">
            <div className="icon-wrapper">
                <SVGElement width={60} />
            </div>
            <p>{label}</p>
        </div>
    );
};

export default FeatureIcon;
