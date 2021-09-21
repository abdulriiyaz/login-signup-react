import React from 'react'
import img from '../sg.jpg'

const Allusers = ({all_users}) => {

    console.log(all_users)
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
        <div className="md:w-4/5 md:h-screen items-center mt-5">
          {/* all userss */}
          <div className="md:w-4/5 md:h-screen items-center mt-5">
            <h1>Hey</h1>
          </div>
        </div>
      </div>
    );
}

export default Allusers
