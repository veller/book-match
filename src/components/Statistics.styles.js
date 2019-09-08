import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 2px;
  width: calc(100% - 48px);
`;

export const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;

  h1 {
    font-size: 16px;
    font-weight: normal;
    color: #696969;
    margin-bottom: 0;
  }

  h2 {
    font-size: 14px;
    font-weight: normal;
    color: #979797;
    margin-top: 0;
  }
`;

export const ChartContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;

  span {
    font-weight: bold;
    font-size: 24px;
    color: #1fc5ed;
  }

  svg {
    width: 62px;
    height: 62px;
    margin-left: 24px;
    transform: rotate(270deg);
  }
`;
