import React from 'react';
import styled from "styled-components";

const Containter = styled.div`
  background-color: #efefef;
  height: 70vh;
  width: 100%;
  display: block;
  @media (max-width: 768px) {
    height: 140vh;
  }
`;

const Content = styled.div`
  margin: auto;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    overflow: visible;
  }
`;

const CharacterInnerContent = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  max-width: 768px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CharacterImage = styled.img<{right: number}>`
  height: 130vh;
  margin-top: 100vh;
  margin-right: ${({right}) => -right}px;
  z-index: 5;
  display: block;
  
  transition: all 0.3s ease-out;
  
  @media (max-width: 768px) {
    margin-right: 0px;
    z-index: 4;
  }
`;

const DescriptionContainer = styled.div`
  position: absolute;
  z-index: 4;
  display: flex;
  flex: 1;
  background-color: #FFF;
  
  @media (max-width: 768px) {
    height: 70vh;
    z-index: 5;
  }
`;

const Description = styled.div`
  color: #333;
  font-size: 3.5rem;
  font-weight: bold;
`;

type CharacterProps = {
  characterImg: string;
  name: string;
  enName: string;
  right: number;
  introduce: string;
  message: string;
  age: string;
  weight: string;
  height: string;
};

const CharacterContent: React.FC<CharacterProps> = ({characterImg, name, enName, right, age, message, weight, introduce, height}) => {
  return (
    <Containter>
      <Content>
        <CharacterInnerContent>
          <CharacterImage src={characterImg} right={right}/>
          <DescriptionContainer>
            <Description>{name}({enName})</Description>
          </DescriptionContainer>
        </CharacterInnerContent>
      </Content>
    </Containter>
  );
};

export default CharacterContent;