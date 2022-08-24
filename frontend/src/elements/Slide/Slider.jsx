import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "../../assets/diary1.png";
import img2 from "../../assets/diary2.png";
import img3 from "../../assets/diary3.png";
import img4 from "../../assets/diary4.png";
import beforebutton from "../../assets/before.png";
import nextbutton from "../../assets/next.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./Slider.module.css";

const Container = styled.div`
  zwidth: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;
const Button = styled.button``;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TOTAL_SLIDES = 3;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <div className={styles.Slider_layout}>
      {" "}
      <div className={styles.slide_containerlayout}>
        <div className={styles.button_layout}>
          <Button onClick={prevSlide} className={styles.diary_left} >
            <IoIosArrowBack id="diary_left"/>
            {/* <img src={beforebutton} alt="beforbutton" />{" "} */}
          </Button>
          <Container>
            <div className={styles.slide_layout}>
              <SliderContainer ref={slideRef}>
                <Slide img={img1} className={styles.img1} />
                <Slide img={img2} className={styles.img2} />
                <Slide img={img3} className={styles.img3} />
                <Slide img={img4} className={styles.img4} />
              </SliderContainer>{" "}
            </div>
            <div className={styles.slidenextbutton_layout}> </div>
          </Container>{" "}
          <Button onClick={nextSlide} className={styles.diary_right} >
            <IoIosArrowForward id="diary_right"/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
