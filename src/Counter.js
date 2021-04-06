import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { LOGIN, LOGINASYNC, LOGINOTPREQUEST } from "./reducers";

var data = { email: "", password: null, otp: null };
const CounterDumb = ({ dataValue, onLogInAsync }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // will call authProvider.login({ email, password })
    data.email = email;
    data.password = password;
    data.otp = Math.floor(Math.random() * 99999);
    onLogInAsync();
  };

  const logIn = (e) => {
    e.preventDefault();
    if (otp == dataValue.verifyOtp) {
      alert("success Login");
    } else {
      alert("failed Login");
    }
  };
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <form>
        <h4>Email</h4>
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <h4>Password</h4>
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <button
          variant="contained"
          color="primary"
          type="submit"
          onClick={submit}
        >
          Submit
        </button>
        <hr></hr>
        <div>
          <input
            name="otp"
            type="text"
            value={otp}
            placeholder="Enter Otp"
            onChange={(e) => setOtp(e.target.value)}
          />{" "}
          <button
            variant="contained"
            color="primary"
            type="submit"
            onClick={logIn}
          >
            LogIn
          </button>
        </div>
      </form>
    </div>
  );
};

const action = (type, data) => () => ({ type, data });
export const Counter = connect((state) => ({ dataValue: state }), {
  onLogIn: action(LOGIN, null),
  onLogInAsync: action(LOGINASYNC, data),
  otpRequest: action(LOGINOTPREQUEST, data),
})(CounterDumb);
