import React from "react";
import { kFormatter } from "../utils/kFormatter";
import { users } from "../data/data";
import { Container, SessionDescription, List, Header, Row } from "./Top.styles";

function TopUsers() {
  return (
    <Container>
      <SessionDescription color={"#ff8201"}>
        <h1>Top 10</h1>
        <h2>usuários com a maior biblioteca</h2>
      </SessionDescription>
      <List>
        <Header color={"#ff8201"} headerColor={"rgba(255, 130, 1, 0.1)"}>
          <h3>Usuário</h3>
          <h3>Livros na biblioteca</h3>
        </Header>
        {users.data.map(user => (
          <Row color={"#ff8201"} key={user.id}>
            <p>{user.username}</p>
            <p>{`${kFormatter(user.numberOfBooks)} livros`}</p>
          </Row>
        ))}
      </List>
    </Container>
  );
}

export default TopUsers;
