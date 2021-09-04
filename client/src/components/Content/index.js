import './Content.scss';
import ContentImage from '../../assets/img-1.jpg';

const Content = () => {
    return (
        <section className="content-container grid">
            <div className="flex-column content-left">
                <h2 className="h2-font">LOREM IPSUM</h2>
                <p className="detail-font">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Earum maxime voluptatem tempore nostrum fuga non eligendi,
                    repudiandae dolores exercitationem assumenda molestiae
                    beatae aliquid repellat pariatur voluptas similique sed. Eum
                    odit dolorum aliquam nulla praesentium omnis adipisci natus
                    a magnam velit.
                </p>
                <a className="detail-link">{'>'} Lorem Ipsum</a>
            </div>
            <img
                src={ContentImage}
                alt="silhouette of a friend helping another mountain climbing"
            />
        </section>
    );
};

export default Content;
