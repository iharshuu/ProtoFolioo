import { React, useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material";
import { motion } from "framer-motion";
import "animate.css";

//Component styles
const StyledLoaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  position: "fixed",
  backgroundColor: theme.palette.background.main,
}));

//End Component styles

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
};

const Loader = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 2000);
  }, []);

  return (
    <StyledLoaderContainer>
      <div className={hasLoaded ? "animate__animated animate__fadeOut" : ""}>
      <motion.svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 120"
  width="8rem"
  initial="hidden"
  animate="visible"
>
  <motion.path
    d="M80,30 
       C60,10,20,10,30,35 
       C40,60,90,50,70,75 
       C50,100,10,90,30,110"
    fill="none"
    stroke={theme.palette.textMain.main}
    strokeWidth="6"
    strokeLinecap="round"
    variants={pathVariants}
  />
</motion.svg>

      </div>
    </StyledLoaderContainer>
  );
};

export default Loader;
