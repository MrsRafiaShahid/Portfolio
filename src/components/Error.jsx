import React from "react";

const Error = ({ message = "Something went wrong!" }) => {
  return (
    <>
      <div className="min-h-screen text-white relative  text-center error z-100">
        <p className="absolute top-10 left-0 riht-0 border-2 border-red-500 rounded shadow-2xl">
          {message}
        </p>
      </div>
    </>
  );
};

export default Error;
