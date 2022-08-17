import React from "react";
import H1, {
  Button,
  FormContainer,
  Input,
  Label,
  P,
} from "./ReuseableComponents";

const Welcome_sec = ({ data }) => {
  console.log(data);
  return (
    <div>
      <H1>{data[0].title}</H1>
      <P>{data[0].subtitle}</P>
      <FormContainer>
        <Label>{data[0].label1}</Label>
        <br />
        <Input />
        <br />
        <Label>{data[0].label2}</Label>
        <br />
        <Input />
        <Button required>{data[0].buttonText}</Button>
      </FormContainer>
    </div>
  );
};

export default Welcome_sec;
