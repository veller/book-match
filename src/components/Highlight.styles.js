import styled from "styled-components";

export const Box = styled.div`
  height: 264px;
  width: 100%;
  margin: 24px 12px;
  background-color: #ffffff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  background-color: ${props => props.color};
  border-radius: 50%;

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
  }
`;

export const Number = styled.div`
  font-weight: 900;
  font-size: 56px;
  letter-spacing: -0.53px;
  color: #696969;
  margin: 22px 0 5px 0;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #696969;
`;
