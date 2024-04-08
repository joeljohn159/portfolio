import './Testimonials.css'
import { Data } from './Data'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


export default function Testimonials(){
    return (
        <div id='testimonials' className="testimonial container section">
            <h2 className="section__title">What my collegues says?</h2>
            <span className='section__subtitle'>Testimonials</span>


            <Swiper 
                 loop=' true'
                 grabCursor='true'
                 spaceBetween={24}
                 pagination={{
                   clickable: true,
                 }}
                 breakpoints={{
                   576: {
                     slidesPerView: 2
                   },
                   768: {
                     slidesPerView: 2,
                     spaceBetween: 48,
                   }
                 }}
                 modules={[Pagination]}
            className="testimonial__container">
                {Data.map(({id, image, title, description})=>{
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt="title" className='testimonial__img'/>

                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}