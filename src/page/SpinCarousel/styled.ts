import styled, { keyframes, css } from "styled-components";
import { COLORS } from "../../styles/variables";

const fadeIn = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
`;

const borderInOut = keyframes`
   0% {
    opacity: 1;
    padding: 20px;
    border: 1px solid red;
  }
  25% {
    opacity: 0.3;
    padding: 23px;
    border: 2px solid gren;
  }
  50% {
    opacity: 0.8;
    padding: 17px;
    border: 1px solid red;
  }
  75% {
    opacity: 0.3;
    padding: 23px;
    border: 2px solid black;
  }
  100% {
    opacity: 1;
    padding: 20px;
    border: 1px solid red;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  over-flow: hidden;
  display: flex;
  flex-direction: row;
`;

export const Slider = styled.div<{ color: any }>`
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${(props) => (props?.color ? props.color : "#000000")};
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 1;

  &.active {
    display: flex;
    animation: ${fadeIn} 1s;
    z-index: 2;
  }

  &.prev-slider {
    display: flex;
    animation: ${fadeOut} 1s;
  }
`;

export const Title = styled.p`
  font-size: 48px;
  line-height: 52px;
  font-weight: 700;
  color: ${COLORS.white};
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  :after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${borderInOut} 2s infinite;
    border-radius: 50%;
  }
`;

export const WhiteDot = styled.div`
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid;
  position: relative;
  background-color: ${COLORS.white};
`;

export const ButtonContainer = styled.div`
  display: grid;
  place-content: center;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translateX(-50%);
  z-index: 2;
  justify-items: center;
  overflow: hidden;
  width: 100%;
`;

export const Circle = styled.div`
  position: relative;
  left: 50%;
  bottom: -75%;
  transform: translateX(-50%);
  border: 2px solid ${COLORS.orange_2};
  border-radius: 50%;
  padding: 110px;
  background: ${COLORS.white};
`;

export const NodeTitle = styled.p`
  padding: 0;
  margin: 0;
`;

export const Node = styled("div")<{ indexNode: number; total: number }>`
  position: absolute;
  left: calc(50% - 25px);
  top: calc(50% - 25px);
  background-color: ${COLORS.white};
  height: 50px;
  width: 50px;
  border: 2px solid ${COLORS.orange_2};
  border-radius: 50%;
  color: ${COLORS.black};
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ indexNode, total }) => css`
    &:nth-child(${indexNode}) {
      transform: rotate(${indexNode * (360 / total)}deg) translateX(112px);
    }
  `};

  ${NodeTitle} {
    ${({ indexNode, total }) => css`
      transform: rotate(-${indexNode * (360 / total)}deg);
    `};
  }
`;
