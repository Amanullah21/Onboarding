import React from "react";
import H1, {
  Button,
  FormContainer,
  Input,
  Label,
  P,
} from "./ReuseableComponents";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import style from "../Style/Onboarding.module.css";
import steps from "./Data";
import { useNavigate } from "react-router-dom";

const LetsSee = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={style.progrss_bar}>
        <Box sx={{ width: "85%" }}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      <H1>{data[1].title}</H1>
      <P>{data[1].subtitle}</P>
      <FormContainer>
        <Label>{data[1].label1}</Label>
        <br />
        <Input />
        <br />
        <Label>{data[1].label2}</Label>
        <br />
        <Input />
        <Button onClick={() => navigate("/planing")}>
          {data[1].buttonText}
        </Button>
      </FormContainer>
    </div>
  );
};

export default LetsSee;
