import React, { useState, useEffect, useRef } from "react";
import Slide from "../../component/Slide/Slide";
import styled from "styled-components";
import place1 from "../../assets/p1.png";
import place2 from "../../assets/p2.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./Sliderplace.module.css";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;
const Button = styled.button``;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TOTAL_SLIDES = 3;

const Slider1 = () => {
  const { state } = useLocation();
  const result = state.result.testResult;
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
          <Button onClick={prevSlide} className={styles.test_left}>
            <IoIosArrowBack id="place1_left" />
            {/* <img src={beforebutton} alt="beforbutton" />{" "} */}
          </Button>
          <Container>
            <div className={styles.slide_layout}>
              <SliderContainer ref={slideRef}>
                <Slide img={result.type_space_img1} className={styles.img1} />
                <Slide img={result.type_space_img2} className={styles.img2} />

                {result.type_space_img3 !== "null" ? (
                  <Slide img={result.type_space_img3} className={styles.img3} />
                ) : (
                  <Slide img={result.type_space_img1} className={styles.img1} />
                )}
                {result.type_space_img4 !== "null" ? (
                  <Slide img={result.type_space_img4} className={styles.img4} />
                ) : (
                  <Slide img={result.type_space_img2} className={styles.img2} />
                )}
              </SliderContainer>{" "}
            </div>
            <div className={styles.slidenextbutton_layout}> </div>
          </Container>{" "}
          <Button onClick={nextSlide} className={styles.test_right}>
            <IoIosArrowForward id="place1_right" />
          </Button>
        </div>
      </div>{" "}
      <div className={styles.spacetext}> {result.type_space}</div>
    </div>
  );
};

export default Slider1;
