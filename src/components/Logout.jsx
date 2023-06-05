import React from "react";
import "./Logout.css";

const Logout = () => {
  return (
    <div>
      <h1>
        Welcome <span className="user_name">@Philus</span>
        <button className="logout_button">Logout</button>
      </h1>
    </div>
  );
};

export default Logout;
