import { useContext, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './ReviewCarousel.scss';
import { HomeContext } from './../../store/HomeContext';

const ReviewCarousel = () => {
    const { homeData } = useContext(HomeContext);
    const { review } = homeData.data.testimonial;

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="flex-column-center"
            variant="dark"
        >
            {review.map(({ author, createdDate, reviewContent }, i) => (
                <Carousel.Item key={`${author + createdDate + i}`}>
                    <div>
                        <h4>
                            {author} {createdDate}
                        </h4>
                        <p className="detail-font">{reviewContent}</p>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ReviewCarousel;
