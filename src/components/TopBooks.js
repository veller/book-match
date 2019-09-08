import React from "react";
import { kFormatter } from "../utils/kFormatter";
import { books } from "../data/data";
import { Container, SessionDescription, List, Header, Row } from "./Top.styles";

function TopBooks() {
  return (
    <Container>
      <SessionDescription color={"#5dc68e"}>
        <h1>Top 10</h1>
        <h2>livros mais cadastrados</h2>
      </SessionDescription>
      <List>
        <Header color={"#5dc68e"} headerColor={"rgba(93, 198, 142, 0.1)"}>
          <h3>Livro</h3>
          <h3>Cadastros</h3>
        </Header>
        {books.data.map(book => (
          <Row key={book.id} color={"#5dc68e"}>
            <p>{book.title} </p>
            <p>{kFormatter(book.numberOfRegisters)}</p>
          </Row>
        ))}
      </List>
    </Container>
  );
}

export default TopBooks;
