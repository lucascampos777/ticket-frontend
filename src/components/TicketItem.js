export default function TicketItem({ ticket }) {
    return (
      <div className="list-group-item list-group-item-action flex-column align-items-start mb-2">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{ticket.title}</h5>
          <small>Deadline: {ticket.deadline}</small>
        </div>
        <p className="mb-1">{ticket.description}</p>
        <small>Assigned to: {ticket.assignedTo}</small><br />
        <small className="text-success">Status: Pending</small>
      </div>
    );
  }