import React from "react";
import style from "../Style/Onboarding.module.css";
import logo1 from "../Icon/icon.PNG";
import WelcomeSec from "./WelcomeSec";
import Data from "../Components/Data";
import LetsSee from "./LetsSee";
import Planing from "./Planing";
import Congrat from "./Congrat";
import { Route, Routes } from "react-router-dom";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { Context } from "../ContextApi/Context";
const Onbording = () => {
  const steps = ["0", "1", "2", "3"];
  const { count } = React.useContext(Context);
  return (
    <div className={style.onbording_container}>
      <div className={style.onbording_logo}>
        <img src={logo1} alt="Logo" />
        <h2>Eden</h2>
      </div>
      <div className={style.progrss_bar}>
        <Box sx={{ width: "85%" }}>
          <Stepper activeStep={count}  alternativeLabel>
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel/>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      <div className={style.botton_section}>
        <Routes>
          <Route path="/" element={<WelcomeSec data={Data} />} />
          <Route path="/letsee" element={<LetsSee data={Data} />} />
          <Route path="/planing" element={<Planing data={Data} />} />
          <Route path="congrat" element={<Congrat data={Data} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Onbording;
