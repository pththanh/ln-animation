import {
  Container,
  Slider,
  Title,
  Button,
  ButtonContainer,
  WhiteDot,
  Circle,
  Node,
  NodeTitle,
} from "./styled";
import { HomeData } from "./mockData";
import { COLOR_SLIDER } from "../../constant";
import { colorSliderType } from "../../constant";
import clsx from "clsx";
import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/dist/Draggable";

type sliderType = {
  img: string;
  color: string;
  title?: string;
};

const SpinCarousel = () => {
  const { slider } = HomeData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [openCircle, setOpenCircle] = useState(false);
  const DragRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (openCircle) {
        gsap.to(".circle", { scale: 1 });
      } else {
        gsap.to(".circle", { scale: 0 });
      }
    });

    return () => ctx.revert();
  }, [openCircle]);

  useLayoutEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create(DragRef.current, {
      type: "rotation",
    });
  });

  const handleNextSlide = () => {
    if (activeIndex === slider?.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
    setOpenCircle(!openCircle);
  };

  return (
    <Container>
      {slider?.map(({ img, color, title }: sliderType, index) => {
        return (
          <Slider
            className={clsx({
              active: index === activeIndex,
              "prev-slider":
                index < activeIndex ||
                (index === slider.length - 1 && activeIndex === 0),
            })}
            color={COLOR_SLIDER[color as keyof colorSliderType]}
            key={index}
          >
            <Title>{title}</Title>
          </Slider>
        );
      })}
      <ButtonContainer>
        <Circle className="circle" ref={DragRef}>
          {slider?.map((_, index) => (
            <Node indexNode={index + 1} total={slider?.length}>
              <NodeTitle>{index}</NodeTitle>
            </Node>
          ))}
        </Circle>
        <WhiteDot>
          <Button onClick={handleNextSlide} />
        </WhiteDot>
      </ButtonContainer>
    </Container>
  );
};

export default SpinCarousel;
