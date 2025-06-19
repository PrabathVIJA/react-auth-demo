import React from "react";

function DashBoard({ onClick, user }) {
  return (
    <div className="DashBoard-container">
      <h2>Welcome,{user.email} </h2>
      <button onClick={onClick}>Logout</button>
    </div>
  );
}

export default DashBoard;
