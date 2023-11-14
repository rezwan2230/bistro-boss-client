import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='mt-10'>

            <SectionTitle 
            heading='ORDER ONLINE'
            subHeading='From 11:00am to 10:00pm'
            >
            </SectionTitle>

            <div className=''>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-10 mb-20"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h2 className=' text-2xl text-center uppercase -mt-10 text-white mb-12'>Salad</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h2 className=' text-2xl text-center uppercase -mt-10 text-white'>Soup</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h2 className=' text-2xl text-center uppercase -mt-10 text-white'>Pizzas</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h2 className=' text-2xl text-center uppercase -mt-10 text-white'>Dessert</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h2 className=' text-2xl text-center uppercase -mt-10 text-white'>Salad</h2>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default Category;