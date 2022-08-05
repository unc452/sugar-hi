import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //padding: 20px;
  z-index: 4;
  background-color: #EFEFEF;
  color: #333;
  
  padding: 1.5vh 0px 100vh 0px;
  

  @media (max-width: 768px) {
    padding: 1.5vh 0px 100vh 0px;
  }
`;

const Copyright = styled.p`
  padding: 20px 0px;
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Copyright>
        Copyright 2022. SUGAR-HI All rights reserved.
      </Copyright>
    </Container>
  );
};

export default Footer;
