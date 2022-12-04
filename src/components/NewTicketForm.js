import React from "react";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewTicketForm(props) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();

    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <h2>New Ticket Form</h2>
      <hr />
      <ReusableForm onSubmittingForm={handleNewTicketFormSubmission} buttonText="Create New Ticket" />
    </React.Fragment>
  );
}

export default NewTicketForm;
