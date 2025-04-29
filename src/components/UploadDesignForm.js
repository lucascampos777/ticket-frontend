import React, { useState } from "react";
import api from "../api/designApi";

export default function UploadDesignForm({ onUploadSuccess }) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
    const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !file) {
      alert("Please provide a title and select a file.");
      return;
    }

    setPending(true)

    try {
      await api.uploadDesign(title, file);
      alert("Upload successful!");
      setTitle("");
      setFile(null);
      if (onUploadSuccess) {
        onUploadSuccess(); // refresh designs
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed.");
    } finally {
      setPending(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded mb-4">
      <h2 className="h5 mb-3">Upload Design</h2>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Design Title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={pending}>
        Upload
      </button>
    </form>
  );
}
