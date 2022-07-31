import React from 'react';
import styled from "styled-components";

const Containter = styled.div`
  display: block;
  background-color: #dfdfdf;
  height: 70vh;
`;

const Content = styled.div`
  margin: auto;
  max-width: 768px;
  padding: 0px 1.5rem;
  overflow: hidden;
`;

const CharacterImage = styled.img`
  height: 10vh;
`;

const DescriptionContainer = styled.div`
  display: flex;
`;

const Description = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

type CharacterProps = {
  characterImg: string;
  name: string;
};

const CharacterContent: React.FC<CharacterProps> = ({characterImg, name}) => {
  return (
    <Containter>
      <Content>
        <CharacterImage src={characterImg} />
        <DescriptionContainer>
          <Description>{name}</Description>
        </DescriptionContainer>
      </Content>
    </Containter>
  );
};

export default CharacterContent;