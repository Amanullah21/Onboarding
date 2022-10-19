import React from "react";
import { Context } from "../ContextApi/Context";
import Tick from "../Icon/Tick-icon.PNG";
import H1, {
  Button,
  FormContainer,
  Img,
  P,
} from "../StyleComponents/ReuseableComponents";

const Congrat = ({ data }) => {
  const { Uname } = React.useContext(Context);
  const homePage = () => {};
  return (
    <div>
      <Img src={Tick} />
      <H1>{data[3].title + " " + Uname}</H1>
      <P>`${data[3].subtitle} </P>
      <FormContainer>
        <Button onClick={homePage}>{data[3].buttonText}</Button>
      </FormContainer>
    </div>
  );
};

export default Congrat;
