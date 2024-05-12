interface PropsButton {
  context: string;
  handleClick: () => void;
  isDisabled: boolean;
}

const Button: React.FC<PropsButton> = ({context, handleClick, isDisabled}) => {
  return (
    <button disabled={isDisabled} onClick={handleClick}>
      {context}
    </button>
  );
};

export default Button;
