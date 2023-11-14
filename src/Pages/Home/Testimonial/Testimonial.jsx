import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { FaQuoteLeft } from "react-icons/fa";


const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (

        <section className='my-20 mx-20'>
            <SectionTitle
                subHeading='What Our Clients Say'
                heading='TESTIMONIALS'>
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}

                    >
                        <div className='text-center px-52 mx-auto'>
                            <Rating className='mx-auto mb-5'
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className='text-5xl mx-auto my-7'/>
                            <p>{review.details}</p>
                            <h3 className='text-2xl text-orange-400 mt-3'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>

    );
};

export default Testimonial;