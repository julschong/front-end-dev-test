import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './ReviewCarousel.scss';

const ReviewCarousel = () => {
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
            <Carousel.Item>
                <div>
                    <h4>Joe Doe 08/08/2019</h4>
                    <p className="detail-font">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod saepe modi, itaque accusantium, veritatis quibusdam
                        earum eligendi distinctio quos, perferendis minus.
                        Dolorem nulla aut rerum sequi, eum eius, minima incidunt
                        error quae reiciendis dolor animi dolore harum? Ad
                        tenetur, veritatis quaerat quasi illo voluptas atque
                        architecto, quod illum explicabo ab.
                    </p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div>
                    <h4>Jane Doe 09/09/2020</h4>
                    <p className="detail-font">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod saepe modi, itaque accusantium, veritatis quibusdam
                        earum eligendi distinctio quos, perferendis minus.
                        Dolorem nulla aut rerum sequi, eum eius, minima incidunt
                        error quae reiciendis dolor animi dolore harum? Ad
                        tenetur, veritatis quaerat quasi illo voluptas atque
                        architecto, quod illum explicabo ab.
                    </p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div>
                    <h4>John Smith 01/09/2021</h4>
                    <p className="detail-font">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod saepe modi, itaque accusantium, veritatis quibusdam
                        earum eligendi distinctio quos, perferendis minus.
                        Dolorem nulla aut rerum sequi, eum eius, minima incidunt
                        error quae reiciendis dolor animi dolore harum? Ad
                        tenetur, veritatis quaerat quasi illo voluptas atque
                        architecto, quod illum explicabo ab.
                    </p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default ReviewCarousel;
