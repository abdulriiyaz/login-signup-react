import React from "react";
import img from "../sg.jpg";
import { useState } from "react";
import Login from "./Login";

const Signup = () => {
  var all = [];
  var reg_name = /^[a-zA-Z\s]*$/;
  var reg_email =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var reg_phone = /^\d{10}$/;
  var reg_password =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  var isValidName = reg_name.test(name);
  var isValidPassword = reg_password.test(password);
  var isValidEmail = reg_email.test(email);
  var isValidPhone = reg_phone.test(phone);

  const [login, setLogin] = useState(true);

  function validate() {
    if (
      isValidPhone &&
      isValidEmail &&
      isValidPassword &&
      isValidName &&
      name &&
      email &&
      password &&
      phone
    )
      return true;
  }
  function handleFormSubmit(e) {
    e.preventDefault();

    if (validate()) {
      const user = {
        name,
        phone,
        email,
        password,
      };

      if (!name || !email || !password || !phone) {
        //renter
      } else {
        all.push(user);
        localStorage.setItem("users", JSON.stringify(all));
        console.log("Saved in Local Storage");

        setLogin(!login);
      }
    } else {
      alert("Please enter valid details");
    }
  }

  return (
    <>
      {!login ? (
        <Login all={all} />
      ) : (
        <div className="flex flex-col md:flex-row w-full">
          {/* sideground */}
          <div className="w-full md:h-screen">
            <img
              loading="lazy"
              className="object-cover h-60 md:h-screen md:w-full w-full"
              src={img}
              alt="Welcome!"
            />
          </div>
          <div className="md:w-4/5 md:h-screen items-center mt-5">
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col items-center w-full h-screen flex-grow"
            >
              <p className="text-xl md:pt-24 pt-10">Let's get started!</p>
              <p className="text-sm">Please fill out the following fields.</p>
              <div className="flex flex-col mt-10 w-80 items-center">
                <input
                  type="text"
                  className="border-b-2 focus-within:border-[#61acb3] w-full outline-none p-3 m-2"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  type="Phone"
                  className="border-b-2 focus-within:border-[#61acb3] w-full outline-none p-3 m-2"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
                <input
                  type="email"
                  className="border-b-2 focus-within:border-[#61acb3] w-full
            outline-none p-3 m-2"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />

                <input
                  type="password"
                  className="border-b-2 focus-within:border-[#61acb3] w-full outline-none p-3 m-2"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />

                <button
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
        </div>
      )}
    </>
  );
};

export default Signup;
