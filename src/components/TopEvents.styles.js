import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const SessionDescription = styled.div`
  background-color: #fafafa;
  border-radius: 2px;
  margin: 24px 0 24px 24px;
  border: 24px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;

  h1 {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 36px;
    color: #696969;
    margin: 0;
  }

  h2 {
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: right;
    text-transform: lowercase;
    color: #1fc5ed;
    margin: 3px 31px 0px 24px;
  }
`;

export const List = styled.div`
  background-color: #fff;
  padding: 24px;
  margin: 24px 24px 24px -24px;
  width: 80%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 24px 0 24px;
  background-color: rgba(31, 197, 237, 0.1);
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  border-bottom: 1px solid #1fc5ed;

  h3 {
    width: 12.5%;
  }

  h3:nth-child(1) {
    width: 30%;
  }

  h3:nth-child(5) {
    width: 20%;
  }

  h3:nth-child(4) {
    text-align: center;
  }

  h3:nth-child(6) {
    text-align: right;
  }
`;

export const Event = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 0 24px;
  font-size: 14px;
  line-height: 16px;
  color: #666666;
  border-bottom: 1px solid #1fc5ed;

  p {
    width: 12.5%;
  }

  p:nth-child(1) {
    width: 30%;
  }

  p:nth-child(5) {
    width: 20%;
  }

  p:nth-child(4) {
    text-align: center;
  }

  p:nth-child(6) {
    text-align: right;
  }
`;
