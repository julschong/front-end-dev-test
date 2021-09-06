import './Testimonial.scss';
import { AiFillStar } from 'react-icons/ai';
import ReviewCarousel from './../ReviewCarousel/index';

const Testimonial = () => {
    return (
        <section id="testimonial" className="testimonial-container split ">
            <div className="test-left page-padding">
                <h2 className="h2-font">LOREM IPSUM DOLOR SIT AMET</h2>
                <div className="star-group">
                    {[...Array(5)].map((el, i) => (
                        <AiFillStar size={27} fill="#FF7218" key={`star${i}`} />
                    ))}
                </div>
            </div>
            <ReviewCarousel />
        </section>
    );
};

export default Testimonial;
