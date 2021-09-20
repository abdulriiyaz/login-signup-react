

import img from './sg.jpg'

function App() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* sideground */}
      <div className="w-full md:h-screen">
        <img
          className="object-cover h-screen w-full"
          src={img}
          alt="Welcome!"
        />
      </div>
      {/* login */}
      <div class="md:w-4/5 md:h-screen">
        <form className="flex flex-col items-center w-full h-screen flex-grow">
          <p className="text-xl pt-24">Welcome back!</p>
          <p className="text-sm p-0 m-0">Please login to your account.</p>
          <div className="flex flex-col mt-5 ">
            <input
              className="w-auto border-b-2 outline-none "
              type="email"
              placeholder="Username"
            />
            <input
              classNmae="w-auto border-b-2 outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
