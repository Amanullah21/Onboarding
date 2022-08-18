import styled from "styled-components";
const OnbordingContainer = styled.div`
  width: 420px;
  margin: 25px auto;
  padding: 30px;
  paddung-top: 50px @media (max-width: 450px) {
    width: 350px;
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
