import './BannerCTA.scss';

const BannerCTA = ({ bannerURL, gridStart, gridEnd }) => {
    return (
        <section
            className="banner grid"
            style={{ background: `url(${bannerURL})` }}
        >
            <div
                className="flex-column cta-container"
                style={{ gridColumn: `${gridStart}/${gridEnd}` }}
            >
                <h2 className="h2-font">LOREM IPSUM</h2>
                <button className="btn">BUTTON BUTTON</button>
            </div>
        </section>
    );
};

export default BannerCTA;
