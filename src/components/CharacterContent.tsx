import React from 'react';
import styled from "styled-components";

const Containter = styled.div`
  background-color: #efefef;
  height: 140vh;
  padding: 20vh 0px;
  flex: 1;
  display: block;
`;

const Content = styled.div`
  margin: auto;
  height: 100%;
  max-width: 768px;
  padding: 10vh 1.5rem;
  overflow: hidden;
  background-color: #61dafb;
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