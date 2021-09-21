import React from "react";
import img from "../sg.jpg";

const Allusers = () => {
    
  var all = [];
  var all_user = ["abc@gmail.com","xyz@gmail.com","pqr@gmail.com","react@yahoo.com"]
    
  all = JSON.parse(localStorage.getItem('users'))
  
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
          alt="Welcome!"
        />
      </div>
        {/* all userss */}
        <div className="flex md:w-4/5 md:h-screen items-center justify-end">
              <h3 className="w-full h-screen"> All users here: <br/> {all_user.map((email)=>
                  <ul className="w-full" key={email} >{email}</ul>
              )}</h3>          
        </div>
    </div>
  );
};

export default Allusers;
