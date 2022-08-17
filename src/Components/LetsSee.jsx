import React from "react";
import H1, {
  Button,
  FormContainer,
  Input,
  Label,
  P,
} from "./ReuseableComponents";

const LetsSee = ({ data }) => {
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
        <Button>{data[1].buttonText}</Button>
      </FormContainer>
    </div>
  );
};

export default LetsSee;
