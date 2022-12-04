import React from "react";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props) {
  const { ticket } = props;

  function updateTicketDetails(event) {
    event.preventDefault();

    props.onSubmittingEdits({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: ticket.id,
    });
  }

  return (
    <React.Fragment>
      <h3>Edit Ticket</h3>
      <hr />
      <ReusableForm onSubmittingForm={updateTicketDetails} buttonText="Update Ticket" />
    </React.Fragment>
  );
}

export default EditTicketForm;
