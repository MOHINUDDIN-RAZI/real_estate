// src/components/Footer.js
import React from "react";
import "../index.css"; // Optional: for custom styling

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Mohinuddin Razi. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
