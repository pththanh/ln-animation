import React from "react";
import { Container, Slider } from "./styled";
import { COLORS_SLIDER } from "../../constant";

function SpinCarousel() {
  return (
    <Container>
      <Slider color={COLORS_SLIDER.lightBlue}></Slider>
      <Slider color={COLORS_SLIDER.darkBlue}></Slider>
      <Slider color={COLORS_SLIDER.idigoPink}></Slider>
      <Slider color={COLORS_SLIDER.lightRed}></Slider>
      <Slider color={COLORS_SLIDER.orange}></Slider>
      <Slider color={COLORS_SLIDER.green}></Slider>
    </Container>
  );
}

export default SpinCarousel;
