import React, { useEffect, useState, useRef, useContext } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import API_ENDPOINT from "../api/globals/api-endpoints";

const Login = ({ setPage }) => {
  const { setAuth } = useAuth;

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const formHandling = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        API_ENDPOINT.LOGIN,
        JSON.stringify({ email: username, password: password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);
      const { auth, id, dataId } = response.data.data;
      setAuth({ authToken: auth, userId: id, dataId: dataId });
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("no server response");
      } else {
        setErrMsg(error.response.data.message);
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <>
          <section>
            <h1>You are logged in!</h1>
            <br />
            <a href="http://">Go Dasboard</a>
          </section>
        </>
      ) : (
        <div className="sm:w-[400px] mx-auto p-4 flex flex-col gap-4">
          <h1
            onClick={() => setPage(0)}
            className="text-white text-2xl font-bold text-center mb-10"
          >
            Sign In
          </h1>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={formHandling}>
            <input
              type="text"
              id="username"
              placeholder="Masukkan Email"
              className="block rounded-lg px-2 font-semibold w-4/5 sm:w-2/4 mx-auto py-1 mt-3 bg-[#365E74]"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="block rounded-lg px-2 font-semibold w-4/5 sm:w-2/4 mx-auto py-1 mt-3 bg-[#365E74]"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              required
            />

            <button
              className="bg-[#69B254] rounded-lg font-semibold w-4/5 sm:w-2/4 mx-auto py-1 mt-4 hover:bg-white hover:text-[#69B254]"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <p>Forgot password?</p>
          <div>
            <p>Don't have LinkFor account?</p>
            <button
              onClick={() => setPage(2)}
              className="bg-[#224D66] rounded-lg font-semibold w-4/5 sm:w-2/4 mx-auto py-1 mt-3"
              type="submit"
            >
              Create new account
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
