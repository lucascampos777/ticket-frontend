import React, { useState } from "react";
import api from "../api/designApi";

export default function FeedbackForm({ designId, versionNumber, onFeedbackSubmitted }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      await api.submitFeedback(designId, versionNumber, comment);
      setComment("");
      if (onFeedbackSubmitted) {
        onFeedbackSubmitted();
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Write feedback..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-primary">
          Send
        </button>
      </div>
    </form>
  );
}
