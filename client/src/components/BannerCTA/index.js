import './BannerCTA.scss';

const BannerCTA = ({ bannerURL, bannerId, gridStart, gridEnd }) => {
    return (
        <section
            id={bannerId}
            className="banner grid span-all-grid"
            style={{ backgroundImage: `url(${bannerURL})` }}
        >
            <div
                className="flex-column cta-container"
                style={{ gridColumn: `${gridStart}/${gridEnd}` }}
            >
                <h2 className="h2-font">LOREM IPSUM</h2>
                <button className="custom-btn">BUTTON BUTTON</button>
            </div>
        </section>
    );
};

export default BannerCTA;
