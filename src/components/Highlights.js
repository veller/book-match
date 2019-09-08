import React from "react";
import { Container } from "./Highlights.styles";
import { highlights } from "../data/data";
import Highlight from "./Highlight";

function Highlights() {
  return (
    <Container>
      {highlights.data.map(item => (
        <Highlight key={item.id} item={item}></Highlight>
      ))}
    </Container>
  );
}

export default Highlights;
