import React, { useEffect, useState } from "react";
import api from "../api/designApi";

export default function FeedbackList({ designId, versionNumber, refresh }) {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    loadFeedbacks();
  }, [refresh]);

  const loadFeedbacks = async () => {
    try {
      const data = await api.getFeedbacks(designId, versionNumber);
      setFeedbacks(data);
    } catch (error) {
      console.error("Error loading feedbacks:", error);
    }
  };

  return (
    <div className="mt-2">
      {feedbacks.length === 0 ? (
        <p className="text-muted small">No feedback yet.</p>
      ) : (
        <ul className="list-group mt-2">
          {feedbacks.map((fb, idx) => (
            <li key={idx} className="list-group-item py-1">
              {fb.text} <br />
              <small className="text-muted">{new Date(fb.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
