import './Banner1.scss';

const BannerCTA = () => {
    return (
        <section id="banner1" className="banner">
            <div className="flex-column cta-container page-padding">
                <h2 className="h2-font">LOREM IPSUM</h2>
                <button
                    className="custom-btn"
                    onClick={() => {
                        window.alert('Banner 1 button clicked');
                    }}
                >
                    BUTTON BUTTON
                </button>
            </div>
        </section>
    );
};

export default BannerCTA;
