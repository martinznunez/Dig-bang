import styled from "styled-components";

export const ContainerBody = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  h1 {
    font-size: 3rem;
  }
`;

export const WrapperDetail = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  align-items: center;

  p {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  input {
    width: 130px;
    padding: 3;
    border: 1px solid #fff;
    outline: none;
    background-color: rgba(0, 61, 122, 1);
    text-align: center;
    font-size: 3rem;
    font-weight: 900;
    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }
  }
`;

export const ContainerChildCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 80%;
`;

export const StyledWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerFormControlled = styled.div`
  width: 100%;
  height: 160px;
`;
