import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,900&display=swap");
  
  body {
    font-family: "Roboto", sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
  }
`;

export const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Rankings = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 24px);
`;
