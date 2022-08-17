import React from "react";
import selfIcon from "../Icon/Self-icon.PNG";
import GroupIcon from "../Icon/Group-icon.PNG";

import H1, {
  Box,
  BoxContainer,
  BoxText,
  Button,
  FormContainer,
  H3,
  Img,
  Label,
  P,
} from "./ReuseableComponents";

const Planing = ({ data }) => {
  return (
    <div>
      <H1>{data[2].title}</H1>
      <P>{data[2].subtitle}</P>
      <FormContainer>
        <BoxContainer>
          <Box>
            <img src={selfIcon} alt={data[2].selfTitle} />
            <H3>{data[2].selfTitle}</H3>
            <BoxText>{data[2].selfText}</BoxText>
          </Box>
          <Box>
            <img src={GroupIcon} alt={data[2].teamTitle} />
            <H3>{data[2].teamTitle}</H3>
            <BoxText>{data[2].teamText}</BoxText>
          </Box>
        </BoxContainer>
        <Button>{data[2].buttonText}</Button>
      </FormContainer>
    </div>
  );
};

export default Planing;
