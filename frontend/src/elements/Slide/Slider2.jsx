import React, { useState, useEffect, useRef } from "react";
import Slide from "../../component/Slide/Slide";
import styled from "styled-components";
import place3 from "../../assets/p3.png";
import place4 from "../../assets/p4.png";
import place5 from "../../assets/p5.png";
import place6 from "../../assets/p6.png";
import styles from "./Sliderplace.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

const Slider1 = () => {
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
          <Button onClick={prevSlide} className={styles.diary_left}>
            <IoIosArrowBack id="place1_left" />
            {/* <img src={beforebutton} alt="beforbutton" />{" "} */}
          </Button>
          <Container>
            <div className={styles.slide_layout}>
              <SliderContainer ref={slideRef}>
                <Slide img={place3} className={styles.img1} />
                <Slide img={place4} className={styles.img2} />
                <Slide img={place5} className={styles.img2} />
                <Slide img={place6} className={styles.img2} />
              </SliderContainer>{" "}
            </div>
            <div className={styles.slidenextbutton_layout}> </div>
          </Container>{" "}
          <Button onClick={nextSlide} className={styles.diary_right}>
            <IoIosArrowForward id="place1_right" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
