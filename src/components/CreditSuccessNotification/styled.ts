import styled from "styled-components";

export const NotificationWrapper = styled.div`
  position: relative;
  width: 700px;
  background-color: #03a9f4;
  color: #fff;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const StyledText = styled.p`
  font-size: 3rem;
  font-weight: 900;
  animation: scaleIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }
`;
