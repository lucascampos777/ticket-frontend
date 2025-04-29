import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL+'/api/designs';

// Upload a new design file
const uploadDesign = async (title, file) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("designFile", file);

  const response = await axios.post(`${API_URL}/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Fetch all designs
const getDesigns = async () => {
  const response = await axios.get(`${API_URL}/`);
  return response.data;
};

// Download a specific design version
const downloadDesignVersion = (designId, versionNumber) => {
  const url = `${API_URL}/${designId}/download/${versionNumber}`;
  window.open(url, "_blank"); // open download link
};

const submitFeedback = async (designId, versionNumber, comment) => {
  const response = await axios.post(
    `${API_URL}/${designId}/${versionNumber}/feedback`,
    { comment }
  );
  return response.data;
};

const getFeedbacks = async (designId, versionNumber) => {
  const response = await axios.get(
    `${API_URL}/${designId}/${versionNumber}/feedback`
  );
  return response.data;
};

export default {uploadDesign, getDesigns, downloadDesignVersion, submitFeedback, getFeedbacks};