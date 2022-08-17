import React from "react";
import H1, {
  Button,
  FormContainer,
  Input,
  Label,
  P,
} from "./ReuseableComponents";
import { useNavigate } from "react-router-dom";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import style from "../Style/Onboarding.module.css";
import steps from "./Data"
const Welcome_sec = ({ data }) => {
  const navigate = useNavigate();
  

  return (
    <div>
      <div className={style.progrss_bar}>
        <Box sx={{ width: "85%" }}>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      <H1>{data[0].title}</H1>
      <P>{data[0].subtitle}</P>
      <FormContainer>
        <Label>{data[0].label1}</Label>
        <br />
        <Input required />
        <br />
        <Label>{data[0].label2}</Label>
        <br />
        <Input required />
        <Button onClick={() => navigate("/letsee")}>
          {data[0].buttonText}
        </Button>
      </FormContainer>
    </div>
  );
};

export default Welcome_sec;
