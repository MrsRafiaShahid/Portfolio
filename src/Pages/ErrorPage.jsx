import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate =useNavigate
  return (
    <>
    <div className="min-h-screen bg-[#151920] text-white flex flex-col items-center justify-center px-6 error z-100">
        <h1 className="text-6xl font-bold mb-4 text-red-600">404</h1>
        <p className="text-xl mb-6 ">Oops! The page you are looking for doesn't exist.</p>
        <button
        onClick={()=>navigate("/")}
        className='px-6 py-3 bg-blue-600 rounded hover:bg-blue-400 transition ease-in'>
            Go to Home
        </button>
    </div>
    </>
  )
}

export default ErrorPage