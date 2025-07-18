import React from "react";

const Alert = ({ type, message }) => {
  return (
    <>
      <div className="absolute top-10 left-0 right-0  flex justify-center items-center ">
        <div
          className={`${type === "danger" ? "bg-red-600" : "bg-blue-500"} px-4 py-4 text-indigo-200 text-center leading-none flex rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105`} role="alert"
        >
          <p className="mr-2 text-left">{message}</p>
        </div>
      </div>
    </>
  );
};

export default Alert;
