import React from "react";
import { useState } from "react";

const Register = ({ setPage }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const usernameHandling = (value) => {
    setUsername(value);
  };

  const emailHandling = (value) => {
    setEmail(value);
  };

  const passwordHandling = (value) => {
    setpassword(value);
  };

  const formHandling = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
  };

  const toLoginPage = () => {
    setPage(1);
  };

  const toHomePage = () => {
    setPage(0);
  };

  return (
    <div className="sm:w-[400px] mx-auto p-4 flex flex-col gap-4">
      <h1
        onClick={toHomePage}
        className="text-white text-2xl font-bold text-center mb-10"
      >
        Sign Up
      </h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          className="block rounded-lg px-2 font-semibold w-4/5 sm:w-2/4 mx-auto py-1 mt-3 bg-[#365E74]"
          onChange={(e) => usernameHandling(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="block rounded-lg px-2 font-semibold w-4/5 sm:w-2/4 mx-auto py-1 mt-3 bg-[#365E74]"
          onChange={(e) => emailHandling(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="block rounded-lg px-2 font-semibold w-4/5 sm:w-2/4 mx-auto py-1 mt-3 bg-[#365E74]"
          onChange={(e) => passwordHandling(e.target.value)}
        />
        <button
          onClick={(e) => formHandling(e)}
          type="submit"
          className="bg-[#69B254] rounded-lg font-semibold w-4/5 sm:w-2/4 mx-auto py-1 mt-4 hover:bg-white hover:text-[#69B254]"
        >
          Sign Up
        </button>
      </form>
      <div>
        <p>Have LinkFor account?</p>
        <button
          onClick={toLoginPage}
          className="bg-[#224D66] rounded-lg font-semibold w-4/5 sm:w-2/4 mx-auto py-1 mt-3"
          type="submit"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
