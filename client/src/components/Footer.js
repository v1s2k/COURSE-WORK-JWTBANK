import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "../styles/FooterStyles.js";


const Footer = () => {
return (
	<Box>

	<Container>
		<Row>
		<Column>
			<Heading>О НАС</Heading>
			<FooterLink href="#">Контакты</FooterLink>
			<FooterLink href="#">Лицензия</FooterLink>
			<FooterLink href="#">Сотрудничество</FooterLink>
		</Column>
		<Column>
			<Heading>Услуги</Heading>
			<FooterLink href="./Loan">Кредиты</FooterLink>
			<FooterLink href="./Transfer">Онлайн переводы</FooterLink>
			<FooterLink href="./fixeddeposit">Вклады</FooterLink>
		</Column>
		<Column>
			<Heading>Наши контакты</Heading>
			<FooterLink href="#">Москва</FooterLink>
			<FooterLink href="#">Санкт-Петербург</FooterLink>
			<FooterLink href="#">Горячая линия</FooterLink>
		</Column>
		<Column>
			<Heading>Мы в Cоц сетях</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
    <h6 style={{color: "white"}}>Александр Васильев ИКБО-20-19!</h6>
	</Box>
);
};
export default Footer;