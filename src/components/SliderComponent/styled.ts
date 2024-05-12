import Slider from "rc-slider";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
  .rc-slider-rail {
    padding: 2.5px;
  }
`;

export const StyledSliderWrapper = styled.div`
  max-width: 480px;
  margin: auto;
`;

export const StyledRangeLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  span {
    font-size: 2rem;
    font-weight: 400;
  }
`;
