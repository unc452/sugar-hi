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

const Content = styled.div<{index: number}>`
  margin: auto;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    overflow: hidden;
    margin-top: ${({index}) => index == 1 ? -50 : 0}vh;
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
    justify-content: flex-end;
    padding: 20vh 0px;
  }
`;

const CharacterImage = styled.img<{right: number, imgHeight: number, top: number, imgMobileHeight: number}>`
  height: ${({imgHeight}) => imgHeight}px;
  margin-top: ${({top}) => top}px;
  margin-right: ${({right}) => right}px;
  z-index: 5;
  display: block;
  
  transition: all 0.3s ease-out;
  
  @media (max-width: 768px) {
    height: ${({imgMobileHeight}) => imgMobileHeight}vh;
    margin-right: 0px;
    margin-top: 90vh;
    z-index: 4;
  }
`;

const DescriptionContainer = styled.div<{index: number}>`
  position: absolute;
  z-index: 4;
  display: flex;
  flex: 1;
  width: 360px;
  padding: 45px;
  background-color: #FFF;
  flex-direction: column;
  box-shadow: 2.5px 2.5px 2.5px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    height: 25vh;
    z-index: 5;
    justify-content: center;
    margin-bottom: ${({index}) => index == 1 ? 10 : 30}vh;
  }
`;

const Name = styled.p`
  color: #333;
  text-transform: uppercase;
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
  margin: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin: 10px 0px;
  }
`;

const IntroduceDescription = styled.p`
  font-style: italic;
  text-align: center;
  color: #333;
  font-size: 1.3rem;
`;

const InfomationContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Information = styled.div<{color: string, textColor: string}>`
  flex: 1;
  padding: 25px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  color: ${({textColor}) => textColor};
  border-radius: 10px;
  background-color: ${({color}) => color};
  text-align: center;
`;

const InformationTitle = styled.p`
  font-size: 1.2rem;
  margin: 0px;
`;

const InformationValue = styled.p`
  font-size: 1.3rem;
  margin: 0px;
`;

type CharacterProps = {
  characterImg: string;
  name: string;
  enName: string;
  right: number;
  imgHeight: number;
  imgMobileHeight: number;
  top: number;
  introduce: string;
  message: string;
  age: string;
  weight: string;
  height: string;
  color: string;
  subColor: string;
  sub2Color: string;
  textColor: string;
  textSubColor: string;
  textSub2Color: string;
  index: number;
};

const CharacterContent: React.FC<CharacterProps> = ({characterImg, name, enName, right, top, imgHeight, imgMobileHeight, age, message, weight, introduce, height, color, subColor, sub2Color, textColor, textSubColor, textSub2Color, index}) => {
  return (
    <Containter>
      <Content index={index}>
        <CharacterInnerContent>
          <CharacterImage src={characterImg} right={right} imgHeight={imgHeight} top={top} imgMobileHeight={imgMobileHeight}/>
          <DescriptionContainer index={index}>
            <Name>{name}({enName})</Name>
            <IntroduceDescription>{introduce}</IntroduceDescription>
            <InfomationContainer>
              <Information color={color} textColor={textColor}>
                <InformationTitle>Age</InformationTitle>
                <InformationValue>{age}</InformationValue>
              </Information>
              <Information color={subColor} textColor={textSubColor}>
                <InformationTitle>Height</InformationTitle>
                <InformationValue>{height}</InformationValue>
              </Information>
              <Information color={sub2Color} textColor={textSub2Color}>
                <InformationTitle>Weight</InformationTitle>
                <InformationValue>{weight}</InformationValue>
              </Information>
            </InfomationContainer>
          </DescriptionContainer>
        </CharacterInnerContent>
      </Content>
    </Containter>
  );
};

export default CharacterContent;