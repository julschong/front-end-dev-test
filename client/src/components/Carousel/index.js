import './Carousel.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Carousel = () => {
    return (
        <div className="carousel-container flex-column-center">
            <h4>John Doe 08/08/2019</h4>
            <div className="carousel">
                <BsChevronLeft size={16} />
                <p className="detail-font">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Temporibus sed a cupiditate, est nihil debitis eligendi
                    provident repellat modi minima esse. Rerum ea cum quis, esse
                    voluptatem harum earum in culpa nisi aliquid. Reiciendis
                    impedit officia numquam tempora enim pariatur deleniti sit
                    repellat eligendi quidem nulla exercitationem error tenetur,
                    consectetur totam qui iste ad ducimus officiis illo maxime
                    voluptate magni.
                </p>
                <BsChevronRight size={16} />
            </div>
            <div className="carousel-position">
                {[...Array(3)].map((el, i) => (
                    <div className="dot" key={`dot${i}`} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
