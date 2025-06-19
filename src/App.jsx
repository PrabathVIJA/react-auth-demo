import { useState, useEffect } from "react";
import Login from "./components/Login.jsx";
import DashBoard from "./components/Dashboard.jsx";
import "./App.css";
import { ClipLoader } from "react-spinners";

function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    console.log(savedUser);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  function handleLogin(data) {
    setUser(data);

    localStorage.setItem("user", JSON.stringify(data));
    setLoading(true);
  }
  function handleLogOut() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <>
      {/* {loading && <ClipLoader color="#000" size={50} />} */}
      {user ? (
        <DashBoard onClick={handleLogOut} user={user} />
      ) : (
        <Login onClick={handleLogin} />
      )}
    </>
  );
}

export default App;
