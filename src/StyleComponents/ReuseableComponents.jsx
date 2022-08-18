import styled from "styled-components";

const Button = styled.button`
  width: 300px;
  border-radius: 10px;
  height: 40px;
  border: none;
  background: #664de5;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin: 5px;
  margin-top:10px;
  &:hover {
    background: #1976d2;
  }
  @media (max-width: 400px) {
    margin: 10px auto;
    width: 265px;
  }
`;

const Input = styled.input`
  text-aligh: center;
  width: 285px;
  height: 35px;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 10px;
  margin: 5px;
  border 1px solid #8a93a9;
  margin-bottom: 15px;
  color:black;
  @media (max-width: 400px) {
    width: 250px;
    margin-left: 0px;
  }
`;

const Label = styled.label`
  font-weight: 500;
  margin-left: 5px;
`;
const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  padding-top: 20px;
  text-align: center;
  @media (max-width: 450px) {
    font-size:27px
  }
`;

const H3 = styled.h3`
  line-height:0.1px
  font-weight:500
  @media (max-width: 450px) {
    font-size:20px
  }
`;

const P = styled.p`
  color: #8a93a9;
  text-align: center;
`;

const Img = styled.img`
  margin-left: 130px;
  margin-top: 50px;
  border-radius:50px;
`;

const FormContainer = styled.div`
  width: 350px;
  padding-top: 20px;
  padding-left: 30px;
`;

const BoxContainer = styled.div`
  width: 300px;
  height: 160px;
  display: flex;
  gap: 10px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

const Box1 = styled.div`
    width:48%
    padding:10px;
    border-radius:10px;
    border:0.5px solid black;
    cursor:pointer;
    &:hover {
      border:2px solid #664de5;
      width:48.5%;
    }
`;
const BoxImg  = styled.img`
    border-radius:50%
`
export {BoxImg}

const BoxText = styled.p`
  text-align: left;
  font-size: 14px;
`;
export default H1;

export {
  Button,
  Input,
  Label,
  H3,
  P,
  Img,
  BoxContainer,
  FormContainer,
  Box1,
  BoxText,
};
