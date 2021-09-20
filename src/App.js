import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import img from "./sg.jpg";

function App() {
  const [loggedIn, setLoggedIn] = useState(true)
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
      {/* login */}
      {loggedIn ? <Signup /> : <Login handle={setLoggedIn} />}
    </div>
  );
}

export default App;
