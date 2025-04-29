import React, { useEffect, useState } from "react";
import UploadDesignForm from "../components/UploadDesignForm";
import DesignList from "../components/DesignList";
import api from "../api/designApi";

export default function DesignPage() {
  const [designs, setDesigns] = useState([]);

  const loadDesigns = async () => {
    try {
      const data = await api.getDesigns();
      setDesigns(data);
    } catch (error) {
      console.error("Failed to fetch designs:", error);
    }
  };

  useEffect(() => {
    loadDesigns();
  }, [])

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Design File Storage System</h1>
      <UploadDesignForm onUploadSuccess={loadDesigns} />
      <DesignList designs={designs} loadDesigns={loadDesigns} />
    </div>
  );
}