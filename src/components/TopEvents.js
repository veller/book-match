import React from "react";
import { kFormatter } from "../utils/kFormatter";
import { events } from "../data/data";
import {
  Container,
  SessionDescription,
  List,
  Header,
  Event
} from "./TopEvents.styles";

function TopEvents() {
  return (
    <Container>
      <SessionDescription>
        <h1>Top 10</h1>
        <h2>eventos com mais participantes confirmados</h2>
      </SessionDescription>
      <List>
        <Header>
          <h3>Nome do evento</h3>
          <h3>Data</h3>
          <h3>Cidade</h3>
          <h3>Estado</h3>
          <h3>Local</h3>
          <h3>Participantes</h3>
        </Header>
        {events.data.map(event => (
          <Event key={event.id}>
            <p>{event.eventName} </p>
            <p>{event.date} </p>
            <p>{event.city} </p>
            <p>{event.state} </p>
            <p>{event.place} </p>
            <p>{kFormatter(event.participants)}</p>
          </Event>
        ))}
      </List>
    </Container>
  );
}

export default TopEvents;
