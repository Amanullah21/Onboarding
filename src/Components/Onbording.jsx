import React from "react";
import style from "../Style/Onboarding.module.css";
import logo1 from "../Icon/icon.PNG";
import Dark from "../Icon/Dark.PNG";
import Light from "../Icon/Light.PNG";
import WelcomeSec from "./WelcomeSec";
import Data from "../Components/Data";
import LetsSee from "./LetsSee";
import Planing from "./Planing";
import Congrat from "./Congrat";
import { Route, Routes } from "react-router-dom";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { Context } from "../ContextApi/Context";
import { BoxImg } from "../StyleComponents/ReuseableComponents";
import {
  BottonSection,
  OnbordingContainer,
  ProgrssBar,
} from "../StyleComponents/GlobelComponents";

const Onbording = () => {
  const steps = ["0", "1", "2", "3"];
  const { count, theme, setDarkTheme } = React.useContext(Context);
  return (
    <OnbordingContainer
      // style={
      //   theme === true
      //     ? { background: "black", color: "white" }
      //     : { background: "white", color: "black" }
      // }
    >
      <div className={style.onbording_logo}>
        <BoxImg src={logo1} alt="Logo" />
        <h2 style={{ paddingLeft: "10px" }}>Eden</h2>
        <div className={style.darkMode} onClick={() => setDarkTheme(!theme)}>
          {theme === false ? (
            <img src={Dark} alt="Dark Mode" />
          ) : (
            <img src={Light} alt="Light Mode" />
          )}
        </div>
      </div>
      <ProgrssBar>
        <Box sx={{ width: "90%" }}>
          <Stepper activeStep={count} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel />
              </Step>
            ))}
          </Stepper>
        </Box>
      </ProgrssBar>
      <BottonSection>
        <Routes>
          <Route path="/" element={<WelcomeSec data={Data} />} />
          <Route path="/letsee" element={<LetsSee data={Data} />} />
          <Route path="/planing" element={<Planing data={Data} />} />
          <Route path="congrat" element={<Congrat data={Data} />} />
        </Routes>
      </BottonSection>
    </OnbordingContainer>
  );
};

export default Onbording;
