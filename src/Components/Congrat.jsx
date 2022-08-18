import React from "react";
import Tick from "../Icon/Tick-icon.PNG";
import H1, { Button, FormContainer, Img, P } from "../StyleComponents/ReuseableComponents";

const Congrat = ({ data }) => {
  return (
    <div>
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
