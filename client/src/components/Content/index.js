import './Content.scss';
import ContentImage from '../../assets/img-1.jpg';

const Content = () => {
    return (
        <section id="content" className="content-container split">
            <div className="flex-column content-left page-padding">
                <h2 className="h2-font">LOREM IPSUM</h2>
                <p className="detail-font">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Earum maxime voluptatem tempore nostrum fuga non eligendi,
                    repudiandae dolores exercitationem assumenda molestiae
                    beatae aliquid repellat pariatur voluptas similique sed. Eum
                    odit dolorum aliquam nulla praesentium omnis adipisci natus
                    a magnam velit.
                </p>
                <a className="detail-link" href="#banner1">
                    {'>'} Lorem Ipsum
                </a>
            </div>
            <img
                id="content-image"
                src={ContentImage}
                alt="silhouette of a friend helping another mountain climbing"
                loading="lazy"
            />
        </section>
    );
};

export default Content;
