import React from "react"
import { useState } from "react"
import NavBar from './NavBar';
import {  useNavigate } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Register = () => {
	const navigate = useNavigate()
	const [firstName, setFirstName] = useState()
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [address, setAddress] = useState('')
	const [contact, setContact] = useState('')
	const [balance, setBalance] = useState()
	const [city, setCity] = useState('')


	const registerUser = async (event) => {
		event.preventDefault()

		const response = await fetch("http://localhost:8000/api/register", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
				balance: balance,
				address: address,
				contact: contact,
				city: city,

			}),
		})

		const data = await response.json()
		console.log(data)

		if (data.status === 'ok') {
			navigate('/login')
		}
	}

	return (
		<div>
			<NavBar />
			<div style={{ color: "white" }}>
				<div className="form-body container mt-5 mb-5">
					<h4 className="mb-5">Начните с нами уже сегодня! Заполнив форму ниже</h4>
					<div className="form" style={{ width: "100%", margin: "auto" }}>
						<Form>
							<Row className="mb-4">
								<Form.Group as={Col} controlId="formFirstName">
									<Form.Label>Имя</Form.Label>
									<Form.Control
										type="text"
										placeholder="Иван"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formLastName">
									<Form.Label>Фамилия</Form.Label>
									<Form.Control
										type="text"
										placeholder="Иванов"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</Form.Group>
							</Row>

							<Row className="mb-4">
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										placeholder="example@gmail.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)} />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label>Пароль</Form.Label>
									<Form.Control 
										type="password" 
										placeholder="Пароль"
										value={password}
										onChange={(e) => setPassword(e.target.value)} />
								</Form.Group>
							</Row>

							<Form.Group className="mb-4" controlId="formGridAddress1">
								<Form.Label>Адрес</Form.Label>
								<Form.Control 
									placeholder="Улица Пушкина"
									value={address}
									onChange={(e) => setAddress(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-4" controlId="formGridAddress2">
								<Form.Label>Контактные данные</Form.Label>
								<Form.Control
									type="number"
									placeholder="Phone Number"
									value={contact}
									onChange={(e) => setContact(e.target.value)}
								/>
							</Form.Group>



							<Form.Group className="mb-4" controlId="formDep">
								<Form.Label>Сумма всех депозитов</Form.Label>
								<Form.Control 
									type="number" 
									placeholder="Сумма"
									value={balance}
									onChange={(e) => setBalance(e.target.value)} />
							</Form.Group>



							<Row className="mb-4">
								<Form.Group as={Col} controlId="formGridCity">
									<Form.Label>Город</Form.Label>
									<Form.Control 
										type="text"
										placeholder="Москва"
										value={city}
										onChange={(e) => setCity(e.target.value)} />
								</Form.Group>
							</Row>

							<Form.Group className="mb-4" id="formGridCheckbox">
								<Form.Check type="checkbox" label="Принимаю политику конфиденциальности" />
							</Form.Group>

							<Button variant="primary" type="submit" onClick={registerUser}>
								Подтвердить
                			</Button>
						</Form>
					</div>
				</div>
			</div>

		</div>


	);
}

export default Register