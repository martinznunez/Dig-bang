import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 500px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: #333;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  font-size: 1.6rem;
  font-weight: 500;

  &:last-child {
    border-bottom: none;
  }
`;

export const Term = styled.span`
  font-weight: bold;
`;

export const Credit = styled.span`
  color: #007bff;
`;
export const ItemLabel = styled.span`
  margin-right: 10px;
  color: #555;
  font-size: 1.2rem;
`;

export const ItemValue = styled.span`
  font-weight: bold;
  color: #000;
  font-size: 1.6rem;
  font-weight: 500;
`;
