import React, { useState } from "react";
import H1, {
  Button,
  FormContainer,
  Input,
  Label,
  P,
} from "../StyleComponents/ReuseableComponents";
import { useNavigate } from "react-router-dom";
import { Context } from "../ContextApi/Context";

const Welcome_sec = ({ data }) => {
  const navigate = useNavigate();
  const init = {
    name: "",
    display: "",
  };
  const { circleCount } = React.useContext(Context);
  const [uData, setUData] = useState(init);
  const inputhandle = (e) => {
    const { name, value } = e.target;
    setUData({ ...uData, [name]: value });
  };

  const submitBtn = () => {
    if (uData.name !== "" && uData.display !== "") {
      navigate("/letsee");
      circleCount(1);
      fetch("https://adidas-db.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify(uData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
    } else {
      alert("Fill name & display box");
    }
  };

  return (
    <div>
      <H1>{data[0].title}</H1>
      <P>{data[0].subtitle}</P>
      <FormContainer>
        <Label>{data[0].label1}</Label>
        <br />
        <Input
          placeholder="Md Amanullah"
          onChange={inputhandle}
          name="name"
          value={uData.name}
        />
        <br />
        <Label>{data[0].label2}</Label>
        <br />
        <Input
          required
          name="display"
          placeholder="Aman"
          onChange={inputhandle}
          value={uData.display}
        />
        <Button onClick={submitBtn}>{data[0].buttonText}</Button>
      </FormContainer>
    </div>
  );
};

export default Welcome_sec;
