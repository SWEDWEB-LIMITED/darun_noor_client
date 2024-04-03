import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! Page not found</p>
        <p className="not-found-description">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="not-found-link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
