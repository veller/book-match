import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid #dcdcdc;
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 14px;
    text-align: right;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.87);
    margin-right: 10%;
  }
`;

export const Social = styled.div`
  margin-left: 10%;

  img {
    margin: 10px;
  }
`;
