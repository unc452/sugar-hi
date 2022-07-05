import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

import Logo from "../assets/logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
	padding: 20px;

	@media (max-width: 768px) {
		padding: 20px 0px;
	}
`;

const Title = styled.img`
	width: 250px;

	transition: all 0.3s ease-out;

	@media (max-width: 768px) {
		width: 160px;
	}
`;

// TODO: 모바일에서 안보이게 하고 따로 빼야 할 것 같음
const SubHeader = styled.div`	
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #FFFFFF0F;

	backdrop-filter: contrast(140%);
`;

const TabItem = styled(Link)`
	font-size: 1.2rem;
  display: flex;
  color: #333;
  font-weight: bold;
  padding: 10px 15px;
	text-decoration: none;
	background-color: #9734B300;

  transition: all 0.3s ease-out;

  &:hover {
		color: #FFF;
    background-color: #9734B3FF;
		font-size: 1.3rem;
  }

	@media (max-width: 768px) {
		font-size: 1rem;

		&:hover {
			font-size: 1.1rem;
  	}
	}
`;

const Header: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <Title src={Logo} alt={t("main.title")}/>	
      <SubHeader>
        <TabItem to={"/story"}>{t("header.story")}</TabItem>
        <TabItem to={"/member"}>{t("header.member")}</TabItem>
        <TabItem to={"/news"}>{t("header.news")}</TabItem>
      </SubHeader>
    </Container>
  );
};

export default Header;