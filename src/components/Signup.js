import React from "react";

const Signup = () => {
  const signup = (e) => {
    e.preventDefault();
    var a = [];

    const user = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    a.push(user);
    localStorage.setItem("users", JSON.stringify(a));
    a = [a, ...JSON.parse(localStorage.getItem("users"))];
    console.log(a);
  };
  return (
    <div className="md:w-4/5 md:h-screen items-center mt-5">
      <form className="flex flex-col items-center w-full h-screen flex-grow">
        <p className="text-xl md:pt-24 pt-10">Let's get started!</p>
        <p className="text-sm">Please fill out the following fields.</p>
        <div className="flex flex-col mt-10 w-80 items-center">
          <input
            id="name"
            className="border-b-2 focus-within:border-[#61acb3] w-full outline-none p-3 m-2"
            type="text"
            placeholder="Name"
          />
          <input
            id="phone"
            className="border-b-2 focus-within:border-[#61acb3] w-full outline-none p-3 m-2"
            type="text"
            placeholder="Phone Number"
          />
          <input
            id="email"
            className="border-b-2 focus-within:border-[#61acb3] w-full outline-none p-3 m-2"
            type="email"
            placeholder="Email Address"
          />
          <input
            id="password"
            className="border-b-2 focus-within:border-[#61acb3] w-full outline-none p-3 m-2"
            type="password"
            placeholder="Password"
          />
          <button
            onClick={signup}
            type="submit"
            className="outline-none p-1 mt-10 text-white bg-[#61acb3] rounded-3xl w-full"
          >
            Sign Up
          </button>
        </div>
        <p className="hidden md:inline-flex absolute bottom-0 text-sm font-light cursor-pointer hover:cursor-pointer hover:text-[#61acb3]">
          Terms of use. Privacy policy
        </p>
      </form>
    </div>
  );
};

export default Signup;
