import './BannerCTA.scss';

const BannerCTA = ({
    bannerURL,
    bannerId,
    gridStart,
    gridEnd,
    shiftX,
    detail
}) => {
    return (
        <section
            id={bannerId}
            className="banner grid span-all-grid"
            style={{ backgroundImage: `url(${bannerURL})` }}
        >
            <div
                className="flex-column cta-container"
                style={{
                    gridColumn: `${gridStart}/${gridEnd}`,
                    transform: `translateX(${shiftX})`
                }}
            >
                <h2 className="h2-font">LOREM IPSUM</h2>
                <p
                    className="detail-font"
                    style={{ display: detail ? 'auto' : 'none' }}
                >
                    {detail}
                </p>
                <button className="custom-btn">BUTTON BUTTON</button>
            </div>
        </section>
    );
};

export default BannerCTA;
