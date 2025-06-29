import { Suspense, useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Canvas } from "@react-three/fiber";
import useAlert from "../components/hooks/useAlert.js";
import { Alert, AnimateRobot, Contactform, Error, Loader } from "../components";
import { AnimationProvider } from "../components/context/AnimationContext.jsx";

const Contact = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const [error, setError] = useState(false);
  useEffect(() => {
    import("../components/canvas/AnimateRobot.jsx")
      .then(() => {
        // Successfully loaded the component
        console.log("3D model loaded successfully.");
      })
      .catch((err) => {
        console.error("Error loading 3D model:", err);
        setError(true);
      });
  }, []);
  // Create a custom theme with dark background and Poppins font
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#000000d1",
        paper: "#000000d1",
      },
      text: {
        primary: "#fff",
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });

  return (
    <>
      <div className="bg-red-300 w-full h-10 "></div>
      <section className="relative flex md:flex-row flex-col bg-black mx-auto items-center justify-center">
        {alert.show && <Alert {...alert} />}
        <AnimationProvider>
          <div className="flex w-[135vw] md:w-[50%] justify-center items-center flex-col md:min-h-full">
            <ThemeProvider theme={theme}>
              <Contactform showAlert={showAlert} hideAlert={hideAlert} />
            </ThemeProvider>
          </div>
          <div className="lg:w-1/2 w-full md:h-[550px] h-[450px] flex-1 min-w-[50%] flex justify-center items-center flex-col md:min-h-full ">
            {error ? (
              <Error />
            ) : (
              <Canvas
                camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
                shadows
              >
                <directionalLight intensity={2.5} position={[0, 0, 1]} />
                <ambientLight intensity={1} />
                <Suspense fallback={<Loader />}>
                  <AnimateRobot
                    castShadow
                    position={[0, -1, 0.5]}
                    scale={[1.25, 1.25, 1.25]}
                    rotation={[12.6, -2, 0]}
                  />
                </Suspense>
              </Canvas>
            )}
          </div>
        </AnimationProvider>
      </section>
    </>
  );
};
export default Contact;
