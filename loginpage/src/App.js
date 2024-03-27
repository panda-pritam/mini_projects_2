import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let [data, setData] = useState({});
  let [isLogin, setIsLogin] = useState("");
  let [msg, setMsg] = useState("");
  let onChangeHandler = (e) => {
    e.preventDefault();
    let newObj = { ...data };
    newObj[e.target.id] = e.target.value;
    setData((prev) => newObj);
  };
  let onSubmitHandler = (e) => {
    e.preventDefault();
    if (data.username === "user" && data.password === "password") {
      setIsLogin(true);
      setMsg("Welcome, user!");
    } else {
      setIsLogin(true);
      setMsg("Invalid username or password");
    }
  };
  return (
    <div className="mainDiv">
      <h1>Login Page</h1>
      {!isLogin ? (
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            value={data.username}
            type="text"
            placeholder="username"
            onChange={onChangeHandler}
            required
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            value={data.password}
            type="password"
            placeholder="password"
            onChange={onChangeHandler}
            required
          />
          <br />
          <button type="submit">Submit</button>
          <br />
        </form>
      ) : (
        <p>{msg}</p>
      )}
    </div>
  );
}

export default App;
