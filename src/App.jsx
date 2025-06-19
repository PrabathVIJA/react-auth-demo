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
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(data));
      setLoading(false);
    }, 1000);
  }
  function handleLogOut() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <>
      {user ? (
        <DashBoard onClick={handleLogOut} user={user} />
      ) : (
        <Login onClick={handleLogin} />
      )}
      {loading && (
        <div className="loader-wrapper">
          <ClipLoader color="white" size={50} />
        </div>
      )}
    </>
  );
}

export default App;
