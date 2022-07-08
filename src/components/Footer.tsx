import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 4;

  @media (max-width: 768px) {
    padding: 20px 0px;
  }
`;

const Footer: React.FC = () => {
  return <Container>
    <p></p>
  </Container>;
};

export default Footer;
