 
import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 

import { Navigation, Pagination, A11y } from 'swiper/modules';
import Card from './Card';
import { useGetAllTestimonialsQuery } from '@/redux/feature/apiSlice/apiSlice';
import { Skeleton } from 'antd'; 

 

type Itestimonial = {
    _id: string,
    email: string,
    username: string,
    rating: number,
    feedback: string
}

function Testimonial() { 
    const { data, isLoading, error } = useGetAllTestimonialsQuery()
    console.log(data);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">Testimonials</h1>

    <div className='slide-container swiper py-10'>
      <div className="slide-content">
      <div className="card-wrapper swiper-wrapper">
        <Swiper 
        
         
        modules={[Navigation, Pagination, A11y  ]} navigation={{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",}} pagination={{el:".swiper-pagination",dynamicBullets:true,clickable: true }} centeredSlides={true} slidesPerView={3} spaceBetween={30} loop={true} grabCursor={true} breakpoints={{0:{slidesPerView:1,},520:{slidesPerView:2,}, 950:{slidesPerView:3,},}}>
           
            {
            isLoading ? <Skeleton /> : !isLoading && data?.data?.map((testimonial: Itestimonial) => <SwiperSlide key={testimonial._id}><Card testimonial={testimonial}/></SwiperSlide>)
          }
  
        </Swiper>

      </div>
      </div>

      <div className="swiper-button-next swiper-navBtn"></div>
    <div className="swiper-button-prev swiper-navBtn"></div>
    <div className="swiper-pagination"></div>

    </div>
    </div>
</section>
  );
}

export default Testimonial;

