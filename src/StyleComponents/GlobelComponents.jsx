import styled from "styled-components";
const OnbordingContainer = styled.div`
  width: 420px;
  background: aqua;
  margin: 20px auto;
  padding: 30px;
  @media (max-width: 450px) {
    width: 370px;
    margin: 30px auto;
  }
`;

const ProgrssBar = styled.div`
  margin-left: 50px;
  gap: 30px;
`;

const BottonSection = styled.div`
  height: 400px;
  padding-left: 40px;
  @media (max-width: 450px) {
    height: 400px;
    padding-left: 0px;
  }
`;
export { OnbordingContainer, ProgrssBar, BottonSection };
