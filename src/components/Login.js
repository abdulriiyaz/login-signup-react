import React from "react";

const Login = () => {
  const auth = (e) => {
    e.preventDefault();
    var a = [];
    // localStorage.setItem("users", JSON.stringify(a));
    a = [a, ...JSON.parse(localStorage.getItem("users"))];
    console.log(a)

  };
  return (
    <>
      <div className="md:w-4/5 md:h-screen items-center mt-5">
        <form className="flex flex-col items-center w-full h-screen flex-grow">
          <p className="text-xl md:pt-24 pt-10">Welcome back!</p>
          <p className="text-sm">Please login to your account.</p>
          <div className="flex flex-col mt-10 w-80 items-center">
            <input
              id="username"
              className="border-b-2 focus-within:border-[#61acb3] w-full outline-none p-3 m-2"
              type="text"
              placeholder="Username"
            />
            <input
              id="password"
              className="border-b-2 focus-within:border-[#61acb3] w-full outline-none p-3 m-2"
              type="password"
              placeholder="Password"
            />

            <div className="flex w-full mt-5 items-center justify-between ">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="text-black"
                  name="Remember me"
                />
                <span className="text-black ml-1 text-sm">Remember me</span>
              </div>
              <p className="text-[#61acb3] text-sm hover: cursor-pointer hover: text-underline">
                Forgot Password
              </p>
            </div>
            <button
              onClick={auth}
              type="submit"
              className="p-1 mt-10 outline-none text-white bg-[#61acb3] rounded-3xl w-full"
            >
              Login
            </button>
          </div>
          <p className="hidden md:inline-flex absolute bottom-0 text-sm font-light cursor-pointer hover:cursor-pointer hover:text-[#61acb3]">
            Terms of use. Privacy policy
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
