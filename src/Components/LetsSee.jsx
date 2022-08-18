import React from "react";
import H1, {
  Button,
  FormContainer,
  Input,
  Label,
  P,
} from "./ReuseableComponents";
import { useNavigate } from "react-router-dom";
import { Context } from "../ContextApi/Context";

const LetsSee = ({ data }) => {
  const navigate = useNavigate();
  const { circleCount } = React.useContext(Context);

  return (
    <div>
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
        <Button
          onClick={() => {
            navigate("/planing");
            circleCount(2);
          }}
        >
          {data[1].buttonText}
        </Button>
      </FormContainer>
    </div>
  );
};

export default LetsSee;
