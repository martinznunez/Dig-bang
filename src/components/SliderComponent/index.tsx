import "rc-slider/assets/index.css";
import {FieldType} from "../../modules/CreditForm/types";

import {StyledRangeLabels, StyledSliderWrapper, StyledSlider} from "./styled";

interface PropsSlider {
  range: {min: number; max: number};
  handleChangeRange: (name: string, value: string) => void;
  name: FieldType;
  value: number;
}

const SliderComponent: React.FC<PropsSlider> = ({range, handleChangeRange, name, value}) => {
  const handleSliderChange = (newValue: number | number[]) => {
    if (typeof newValue === "number") {
      handleChangeRange(name, String(newValue));
    } else if (Array.isArray(newValue) && newValue.length > 0) {
      const averageValue = newValue.reduce((acc, val) => acc + val, 0) / newValue.length;

      handleChangeRange(name, String(averageValue));
    }
  };

  return (
    <StyledSliderWrapper>
      <StyledSlider max={range.max} min={range.min} value={value} onChange={handleSliderChange} />
      <StyledRangeLabels>
        <span>{range.min}</span>
        <span>{range.max}</span>
      </StyledRangeLabels>
    </StyledSliderWrapper>
  );
};

export default SliderComponent;
