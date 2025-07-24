import React, { useEffect, useRef } from 'react'
import computer from "/assets/computer.mp4"
const AboutBg = () => {
      const videoRef = useRef(null);
        useEffect(() => {
    if(videoRef){
      videoRef.current.play();
    }
  }, []);
  return (
    <>
    <video className='h-72 object-contain' ref={videoRef} src={computer} typeof='video/mp4' muted  autoPlay loop ></video>
    </>
  )
}

export default AboutBg