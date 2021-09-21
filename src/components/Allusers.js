import React from "react";
import img from "../sg.jpg";
import { nanoid } from 'nanoid'

const Allusers = () => {
  var all = [];
  var all_user = [
    "abc@gmail.com",
    "xyz@gmail.com",
    "pqr@gmail.com",
    "react@yahoo.com",
  ];

  all = JSON.parse(localStorage.getItem("users"));

  for (var i = 0; i < all.length; i++) {
    all_user.push(all[i]["email"]);
  }

  console.log(all);
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* sideground */}
      <div className="w-full md:h-screen">
        <img
          loading="lazy"
          className="object-cover h-60 md:h-screen md:w-full w-full"
          src={img}
          alt="Home"
        />
      </div>
      {/* all userss */}
      <div className="flex flex-col items-center md:w-4/5 md:h-screen">
        <p className="text-xl md:pt-24 pt-10">All users here:</p>
        <div>
          {all_user.map((email) => (
            <div key ={nanoid()} className="flex w-full items-center flex-grow">
              <ul key={nanoid()} className="w-full text-sm">
                {email}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allusers;
