import React from "react";
import {Scrollbar} from "smooth-scrollbar-react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
  display: block;
`;

const Content = styled.div`
  margin: auto;
  max-width: 768px;
  padding: 100px 1.5rem;
`;

const Main: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Scrollbar>
      <Container>
        <Content></Content>
      </Container>
    </Scrollbar>
  );
};

export default Main;
