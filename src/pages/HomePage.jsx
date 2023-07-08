import React from "react";
import { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const HomePage = () => {
  const [menu, setMenu] = useState(0);

  const setLogin = () => {
    setMenu(1);
  };

  const setRegister = () => {
    setMenu(2);
  };

  return (
    <div id="homepage" className="bg-[rgb(3,26,39)] text-white p-4 h-screen">
      <div className="bg-[#031A27] border-2 border-[#286486] md:w-[501px] max-h-[766px] m-auto md:mt-[90px] text-center p-8 rounded-lg">
        {menu == 0 ? (
          <>
            <h1 className="text-2xl font-bold">Welcome to LinkFor</h1>
            <p className="text-xs font-thin my-6">
              LinkFor is a project similar to Linktree, designed to provide
              users with a more connected and efficient experience. With
              LinkFor, you can organize and share the links that matter to you
              in one place.
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={setLogin}
                className="bg-[#69B254] font-semibold w-4/5 sm:w-2/4 mx-auto py-2 rounded-lg hover:bg-white hover:text-[#69B254]"
              >
                Sign In
              </button>
              <button
                onClick={setRegister}
                className="bg-[#224D66] font-semibold w-4/5 sm:w-2/4 mx-auto py-2 rounded-lg hover:bg-white hover:text-[#224D66]"
              >
                Create new account
              </button>
            </div>
          </>
        ) : menu == 1 ? (
          <Login setPage={setMenu} />
        ) : (
          <Register setPage={setMenu} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
