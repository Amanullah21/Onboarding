import React from "react";
import Tick from "../Icon/Tick-icon.PNG";
import H1, { Button, FormContainer, Img, P } from "./ReuseableComponents";

import { Box, Step, StepLabel, Stepper } from "@mui/material";
import style from "../Style/Onboarding.module.css";
import steps from "./Data";

const Congrat = ({ data }) => {
  return (
    <div>
      <div className={style.progrss_bar}>
        <Box sx={{ width: "85%" }} >
          <Stepper activeStep={4} alternativeLabel>
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel />
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      <Img src={Tick} />
      <H1>{data[3].title}</H1>
      <P>{data[3].subtitle}</P>
      <FormContainer>
        <Button>{data[3].buttonText}</Button>
      </FormContainer>
    </div>
  );
};

export default Congrat;
