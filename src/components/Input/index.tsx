import {ChangeEvent} from "react";

interface PropsInput {
  value: number | string;
  name: string;
  handleChange: (name: string, value: string) => void;
  toggleEditing?: () => void;
  isEditing?: boolean;
}

const Input: React.FC<PropsInput> = ({value, name, handleChange, isEditing, toggleEditing}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(name, event.target.value);
  };

  return (
    <>
      {isEditing === false ? (
        <input
          data-testid={name}
          name={name}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={() => toggleEditing?.()}
        />
      ) : (
        <input
          data-testid={name}
          min={0}
          name={name}
          type="number"
          value={value}
          onBlur={() => toggleEditing?.()}
          onChange={handleInputChange}
        />
      )}
    </>
  );
};

export default Input;
