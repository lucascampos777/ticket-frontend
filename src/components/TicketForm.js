import React, { useState } from "react";

export default function TicketForm({ members, onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === '' || description === '' || deadline === '' || assignedTo === '') {
      alert("Please input all values.")
      return;
    }
    setPending(true)
    const newTicket = { title, description, deadline, assignedTo };
    if (onSubmit) 
      await onSubmit(newTicket);

    setPending(false)

    // Reset form
    setTitle("");
    setDescription("");
    setDeadline("");
    setAssignedTo("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <h2 className="h5 mb-3">Create Ticket</h2>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          placeholder="Description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <select
          className="form-select"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          required
        >
          <option value="">Select Team Member</option>
          {members.map((member) => (
            <option key={member.id} value={member.name}>
              {member.name + " (" + (member.skills.join(', ')) + ")"}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary" disabled={pending}>
        Submit
      </button>
    </form>
  );
}
