import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="not-found-container">
        <img src="/not-found.jpg" alt="" />
      </div>

      <div className="return-btn-container">
        <Link to={"/"} className="not-found-btn">
          RETURN TO HOME PAGE
        </Link>
      </div>
    </>
  );
}
