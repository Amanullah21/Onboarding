import React from "react";
import selfIcon from "../Icon/Self-icon.PNG";
import GroupIcon from "../Icon/Group-icon.PNG";

import H1, {
  Box1,
  BoxContainer,
  BoxImg,
  BoxText,
  Button,
  FormContainer,
  H3,
  P,
} from "../StyleComponents/ReuseableComponents";
import { useNavigate } from "react-router-dom";
import { Context } from "../ContextApi/Context";

const Planing = ({ data }) => {
  const { count, circleCount } = React.useContext(Context);

  console.log(count, "count in planning como");
  const navigate = useNavigate();
  return (
    <div>
      <H1>{data[2].title}</H1>
      <P>{data[2].subtitle}</P>
      <FormContainer>
        <BoxContainer>
          <Box1>
            <BoxImg src={selfIcon} alt={data[2].selfTitle} />
            <H3>{data[2].selfTitle}</H3>
            <BoxText>{data[2].selfText}</BoxText>
          </Box1>
          <Box1>
            <BoxImg src={GroupIcon} alt={data[2].teamTitle} />
            <H3>{data[2].teamTitle}</H3>
            <BoxText>{data[2].teamText}</BoxText>
          </Box1>
        </BoxContainer>
        <Button
          onClick={() => {
            navigate("/congrat");
            circleCount(4);
          }}
        >
          {data[2].buttonText}
        </Button>
      </FormContainer>
    </div>
  );
};

export default Planing;
