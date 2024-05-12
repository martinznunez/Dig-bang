import styled from "styled-components";

interface StyledChildCardProps {
  styled: keyof typeof styles;
}

export const StyledChildCard = styled.div<StyledChildCardProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  text-transform: uppercase;

  p {
    font-size: 2rem;
    font-weight: 900;
  }
  span {
    font-size: 1.3rem;
    font-weight: 300;
  }

  strong {
    font-size: 3.5rem;
    font-weight: 900;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    outline: none;
    margin: auto;
    text-align: center;
    font-size: ${(props) => (props.styled === "wrapper_detail" ? "1.3rem" : "2rem")};
    text-transform: uppercase;
    font-weight: 900;

    &:disabled {
      opacity: 0.9;
      cursor: no-drop;
    }
  }

  ${(props) => styles[props.styled]}
`;

export const styles = {
  wrapper_total_prices: {
    backgroundColor: "#0a3158",
    width: "100%",
    "& p": {
      fontWeight: "400",
    },
  },
  wrapper_credit: {
    backgroundColor: "#0bd98e",
    width: "65%",
    "& button": {
      fontWeight: "900",
    },
  },
  wrapper_detail: {
    backgroundColor: "#05519c",
    width: "30%",
    "& button": {
      fontWeight: "600",
    },
  },
};
