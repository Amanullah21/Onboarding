import styled from "styled-components";

const FormContainer = styled.div`
  width: 350px;
  padding-top: 20px;
  padding-left: 50px;
`;

export { FormContainer };
const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  padding-top: 10px;
  text-align: center;
`;
export default H1;

const Label = styled.label`
  font-weight: 500;
  margin-left: 5px;
`;
export { Label };

const P = styled.p`
  color: #b6bcc8;
  text-align: center;
`;
export { P };
const Button = styled.button`
    width:300px;
    border-radius: 5px;
    height:40px;
    background:#664de5;
    cursor:pointer;
    margin:5px;
`;

const Input = styled.input`
  text-aligh: center;
  width: 285px;
  height: 35px;
  border-radius: 5px;
  font-size: 20px;
  padding-left: 10px;
  margin: 5px;
  margin-bottom: 15px;
`;
export { Input };

const BoxContainer = styled.div`
  width: 300px;
  height: 160px;
  display: flex;
  gap: 10px;
  margin-left: 5px;
  margin-bottom:10px;
`;
const Box1 = styled.div`
    width:48%
    padding:5px;
    border:1px solid blue;
    cursor:pointer;
    $
`;
const H3 = styled.h3`
  line-height:0.1px
  font-weight:500
`
export {H3}

const Img = styled.img`
  margin-left: 150px;
  margin-top: 50px;
`;

const BoxText = styled.p`
  text-align:left;
`
export { Img, Box1, BoxContainer,BoxText, Button };
