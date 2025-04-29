import React, { useState, useEffect } from "react";
import api from "../api/designApi";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";

export default function DesignList({designs, loadDesigns}) {
  const [refresh, setRefresh] = useState(false)

  const onFeedbackSubmitted = () => {
    setRefresh(true)
  }

  return (
    <div className="mt-5">
      <h2 className="h5 mb-3">Uploaded Designs</h2>
      {designs.length === 0 ? (
        <p>No designs uploaded yet.</p>
      ) : (
        designs.map((design) => (
          <div key={design.id} className="mb-4">
            <h5>{design.title}</h5>
            <ul className="list-group">
              {design.versions.map((version) => (
                <li
                  key={version.version}
                  className="list-group-item"
                >
                  <div className="d-flex justify-content-between">
                    <span>
                      Version {version.version} - Uploaded on{" "}
                      {new Date(version.uploadDate).toLocaleDateString()}
                    </span>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => api.downloadDesignVersion(design.id, version.version)}
                    >
                      Download
                    </button>
                  </div>

                  {/* Feedback Section */}
                  <FeedbackForm
                    designId={design.id}
                    versionNumber={version.version}
                    onFeedbackSubmitted={onFeedbackSubmitted}
                  />
                  <FeedbackList
                    designId={design.id}
                    versionNumber={version.version}
                    refresh={refresh}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
