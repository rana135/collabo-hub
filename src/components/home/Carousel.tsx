"use client"
import img1 from "../../../public/slider/one.jpg";
import img2 from "../../../public/slider/two.jpg";
import img3 from "../../../public/slider/three.jpg";
import img4 from "../../../public/slider/four.jpg";
import { Carousel } from 'antd'; 
import Image from "next/image";
import styles from "./Carousel.module.css"; // You can create a CSS module for styling

const CarouselHome = () => {
  const slides = [
    { image: img2, content: "During Python workshop", date: "14 October 2022" },
    { image: img4, content: "During JavaScript workshop", date: "28 February 2023" },
    { image: img1, content: "During PHP workshop", date: "19 June 2023" },
    { image: img3, content: "During React workshop", date: "10 October 2023" },
  ];

  return (
    <>
      <Carousel dotPosition={"right"} effect="fade" autoplay={true} autoplaySpeed={3000}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.carouselSlide}>
            <Image
              src={slide.image}
              alt={slide.content}
              priority 
              layout="fill" // Ensures the image takes the full size of the container
              objectFit="cover" // Ensures the image covers the entire container
            />
            <div className={styles.overlay}>
              <h2 className={styles.title}>{slide.content}</h2> 
              <p className={styles.subtitle}>{slide.date}</p> 
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselHome;
