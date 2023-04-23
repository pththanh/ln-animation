import styled from "styled-components";
import { DEFAULT_COLOR } from "../../constant";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Slider = styled.div<{ color: string }>`
  background-color: ${(props) => (props?.color ? props.color : DEFAULT_COLOR)};
  width: 100%;
  height: 100%;
  position: absolute;
`;
