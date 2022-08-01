import React, {useRef} from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

import Logo from "../assets/logo.png";
import {IParallax} from "@react-spring/parallax";

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

const Title = styled.img`
	width: 320px;

	transition: all 0.3s ease-out;

	@media (max-width: 768px) {
		width: 150px;
	}
`;

// TODO: 모바일에서 안보이게 하고 따로 빼야 할 것 같음
const SubHeader = styled.div`	
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #FFFFFF2F;

	backdrop-filter: blur(10px);
`;

const TabItem = styled.button`
	font-size: 1.2rem;
  display: flex;
  color: #333;
  font-weight: bold;
  padding: 10px 15px;
	text-decoration: none;
	background-color: #9734B300;
  border: 0px;
  cursor: pointer;

  transition: all 0.3s ease-out;

  &:hover {
		color: #FFF;
    background-color: #9734B3FF;
		font-size: 1.3rem;
  }

	@media (max-width: 768px) {
		font-size: 1rem;
    padding: 8px 2.5vw;

		&:hover {
			font-size: 1.1rem;
  	}
	}
`;

interface HeaderProps {
  parallax: any;
}

const Header: React.FC<HeaderProps> = ({parallax}) => {
  const {t} = useTranslation();
  return (
    <Container>
      <Title src={Logo} alt={t("main.title")}/>	
      <SubHeader>
        <TabItem onClick={() => {
          parallax.current.scrollTo(1);
        }}>{t("header.story")}</TabItem>
        <TabItem onClick={() => {
          parallax.current.scrollTo(2);
        }}>{t("header.member")}</TabItem>
        <TabItem onClick={() => {
          parallax.current.scrollTo(3);
        }}>{t("header.news")}</TabItem>
      </SubHeader>
    </Container>
  );
};

export default Header;
