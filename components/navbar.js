import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed z-50 left-0 right-0 top-0 bg-gray-900 text-white   body-font h-16 flex items-center shadow-md ">
      <div className="container m-auto  flex flex-wrap px-5  flex-row items-center ">
        <Link href="#">
          <h1 className="brand text-3xl font-black cursor-pointer mr-5">
            {" "}
            Photo<span className="font-light">Grid</span>{" "}
          </h1>
        </Link>

        {/* <input type="search" className=""></input> */}

        <div className=" relative  max-w-lg ml-auto text-gray-600 h-10 pl-2 flex-auto flex bg-white justify-center items-center  rounded-full ">
          <div className="h-10 flex flex-col justify-center align-middle text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="w-full h-10  border-none bg-white px-5 pl-9 rounded-full text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search free high-quality photos"
          />
        </div>

        <div className="h-10 w-10 ml-auto text-white flex justify-center items-center cursor-pointer">
          <Link href="https://github.com/ilyandho/photo-grid">
            <a target="_blank">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
