import './Testimonial.scss';
import { AiFillStar } from 'react-icons/ai';
import Carousel from './../Carousel/index';

const Testimonial = () => {
    return (
        <section className="testimonial-container grid">
            <div className="test-left flex-column">
                <h2 className="h2-font">LOREM IPSUM DOLOR SIT AMET</h2>
                <div className="star-group">
                    {[...Array(5)].map((el, i) => (
                        <AiFillStar size={27} fill="#FF7218" key={`star${i}`} />
                    ))}
                </div>
            </div>
            <Carousel />
        </section>
    );
};

export default Testimonial;
