import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  const ticketList = [
    {
      names: "Homer and Bart",
      location: "Moe's Tavern",
      issue: "Car tire flat",
    },
    {
      names: "Marge and Lisa",
      location: "Try 'n Save",
      issue: "Sold out of project parts",
    },
    {
      names: "Patty and Selma",
      location: "Springfield Elementary",
      issue: "Krabapple out of smokes",
    },
  ];
  return (
    <React.Fragment>
      <h2>Ticket List</h2>
      <hr />
      {ticketList.map((ticket) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
