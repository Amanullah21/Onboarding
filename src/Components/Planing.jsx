import React from "react";
import selfIcon from "../Icon/Self-icon.PNG";
import GroupIcon from "../Icon/Group-icon.PNG";

import H1, {
  Box1,
  BoxContainer,
  BoxText,
  Button,
  FormContainer,
  H3,
  P,
} from "./ReuseableComponents";
import steps from "./Data"
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import style from "../Style/Onboarding.module.css";

import { useNavigate } from "react-router-dom";

const Planing = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={style.progrss_bar}>
        <Box sx={{ width: "85%" }}>
          <Stepper activeStep={2} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      <H1>{data[2].title}</H1>
      <P>{data[2].subtitle}</P>
      <FormContainer>
        <BoxContainer>
          <Box1>
            <img src={selfIcon} alt={data[2].selfTitle} />
            <H3>{data[2].selfTitle}</H3>
            <BoxText>{data[2].selfText}</BoxText>
          </Box1>
          <Box1>
            <img src={GroupIcon} alt={data[2].teamTitle} />
            <H3>{data[2].teamTitle}</H3>
            <BoxText>{data[2].teamText}</BoxText>
          </Box1>
        </BoxContainer>
        <Button onClick={() => navigate("/congrat")}>
          {data[2].buttonText}
        </Button>
      </FormContainer>
    </div>
  );
};

export default Planing;
