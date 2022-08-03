import React from 'react';
import styled from "styled-components";

const Containter = styled.div`
  background-color: #efefef;
  height: 70vh;
  display: block;
`;

const Content = styled.div`
  margin: auto;
  height: 100%;
  max-width: 768px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterInnerContent = styled.div`
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
        <CharacterInnerContent>
          <CharacterImage src={characterImg} />
          <DescriptionContainer>
            <Description>{name}</Description>
          </DescriptionContainer>
        </CharacterInnerContent>
      </Content>
    </Containter>
  );
};

export default CharacterContent;