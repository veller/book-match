import React from "react";
import { kFormatter } from "../utils/kFormatter";
import user from "../images/user.svg";
import book from "../images/book.svg";
import connection from "../images/connection.svg";
import calendar from "../images/calendar.svg";
import { Box, Icon, Number, Description } from "./Highlight.styles";

function svgSelection(target) {
  let icon = "";
  let color = "";

  switch (target) {
    case "user":
      icon = user;
      color = "rgba(255,130,1,0.1)";
      break;
    case "book":
      icon = book;
      color = "rgba(93, 198, 142, 0.1)";
      break;
    case "connection":
      icon = connection;
      color = "rgba(255, 73, 88, 0.1)";
      break;
    case "calendar":
      icon = calendar;
      color = "rgba(31, 197, 237, 0.1)";
      break;
  }
  return { icon, color };
}

function Highlight({ item }) {
  const { color, icon } = svgSelection(item.icon);

  return (
    <Box>
      <Icon color={color}>
        <img src={icon} alt={item.description} />
      </Icon>
      <Number>{kFormatter(item.number)}</Number>
      <Description>{item.description}</Description>
    </Box>
  );
}

export default Highlight;
