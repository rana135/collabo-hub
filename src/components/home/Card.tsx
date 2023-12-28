 
import { Rate } from "antd"; 
import { SwiperSlide } from 'swiper/react';



const Card = ( {testimonial} ) => {
    console.log("testimonial", testimonial);
    return(
        <SwiperSlide>
        <div className="py-10 px-3">
            <div className="card swiper-slide">
          <div className="image-content">
            <span className="overlay"></span>
            <Rate allowHalf defaultValue={testimonial?.rating} disabled={true}/>
          </div>

          <div className="card-content">
            <h2 className=" description">- {testimonial?.username}</h2>
            <p className="name">{testimonial?.feedback}</p>
            
          </div>
        </div>
        </div>
        </SwiperSlide>
    );
};
export default Card;