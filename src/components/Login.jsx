import React, { useState } from "react";

function Login({ onClick }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    const enteredInput = e.target.value;
    const cleanedInput = enteredInput.replace(/[^a-zA-Z0-9 ]/g, "");
    setPassword(cleanedInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "prabath@gmail.com" && password === "123456") {
      onClick({ email });
    } else {
      alert("Please enter correct email and password");
      setEmail("");
      setPassword("");
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="Input-Container">
      <h2>Login</h2>
      <input type="email" value={email} onChange={emailHandler} />
      <br></br>
      <input type="password" value={password} onChange={passwordHandler} />
      <br></br>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
