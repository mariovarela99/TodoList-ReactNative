import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    width: 100%;
    list-style: none;

    li {
      list-style: none;
      padding: 8px 15px;
      margin: 3px auto;
      width: 100%;
    }
  }
`;

const ButtonStyled = styled.Button`
  width: 100%;
`;

export const ImageStyles = {
  width: 50,
  height: 50,
};
