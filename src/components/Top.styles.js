import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  margin: 0 12px 24px 12px;
  width: 50%;
`;

export const SessionDescription = styled.div`
  background-color: #fafafa;
  border-radius: 2px;
  margin: 24px 16px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  text-align: right;
  padding: 60px;
  box-sizing: border-box;

  h1 {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 36px;
    color: #696969;
    margin: 0;
    width: 100%;
    text-align: right;
  }

  h2 {
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-transform: lowercase;
    color: ${props => props.color};
    margin-top: 3px;
  }
`;

export const List = styled.div`
  margin: 24px 24px 24px 0;
  width: 60%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 24px 0 24px;
  background-color: ${props => props.headerColor};
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  border-bottom: 1px solid;
  border-bottom-color: ${props => props.color};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 0 24px;
  font-size: 14px;
  line-height: 16px;
  color: #666666;
  border-bottom: 1px solid;
  border-bottom-color: ${props => props.color};
`;
