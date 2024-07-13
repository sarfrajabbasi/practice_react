import React from "react";
import "./Header.css";
import styles from './Card.module.css'
const Header = () => {
  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <div className="header-container">
      <h1 className="header-title">Welcome to My Website</h1>
      {/* inline */}
      <button style={buttonStyle}>Click Me</button>

      <div className={styles.card}>
      <h2 className={styles.title}>Welcome Card</h2>
      <p className={styles.description}>This is a card component styled using CSS Modules.</p>
    </div>
    </div>
  );
};

export default Header;


