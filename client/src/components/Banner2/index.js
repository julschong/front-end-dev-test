import './BannerCTA.scss';

const BannerCTA = () => {
    return (
        <section id="banner1" className="banner grid span-all-grid">
            <div className="flex-column cta-container">
                <h2 className="h2-font">LOREM IPSUM</h2>
                <p className="detail-font">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, et iusto? Minus, accusantium qui saepe assumenda
                    sequi, quam id expedita, vel voluptatem dignissimos labore
                    quidem.
                </p>
                <button className="custom-btn">BUTTON BUTTON</button>
            </div>
        </section>
    );
};

export default BannerCTA;
