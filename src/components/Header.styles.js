import styled from "styled-components";

export const Nav = styled.div`
  background-color: #ffffff;
  border: 0.5px solid #c8c8c8;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const NavLeft = styled.div`
  flex-basis: 33.33%;
  margin-left: 10%;
`;

export const NavCenter = styled.div`
  flex-basis: 33.33%;

  display: flex;
  justify-content: center;
`;

export const NavRight = styled.div`
  flex-basis: 33.33%;
  font-size: 14px;
  color: #696969;
  margin-right: 10%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    margin-left: 20px;
  }

  span {
    margin-left: 10px;
  }
`;
