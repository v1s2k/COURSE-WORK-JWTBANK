import React from "react";
import "../styles/Transfer.css";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Credit = () => {
    return (
        <div>
            <NavBar />
            <div>
                <div className="bghloan">
                    <h2>Страница подачи заявления на кредит</h2>
                    <div className="loanform">
                        <>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">"@mail"</InputGroup.Text>
                                <FormControl
                                    placeholder="ваша почта"
                                    aria-label="User Acc No"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Пароль</InputGroup.Text>
                                <FormControl
                                    placeholder="Пароль"
                                    aria-label="Password"
                                    aria-describedby="basic-addon2"
                                />
                            </InputGroup>



                            <InputGroup className="mb-3">
                                <InputGroup.Text>$ Сумма</InputGroup.Text>
                                <FormControl aria-label="Amount" type="number" />
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Загрузите ваше заявление</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>

                            <Form.Label>Вид кредита</Form.Label>
                            <Form.Select className="mb-3" defaultValue="Потребительский">
                                <option>Потребительский</option>
                                <option>Автомобильный</option>
                                <option>Кредит для ЮР лиц</option>
                            </Form.Select>

                            <InputGroup>
                                <InputGroup.Text>Дополнение к заявке</InputGroup.Text>
                                <FormControl as="textarea" aria-label="With textarea" />
                            </InputGroup>

                            <Button className="mt-3" variant="primary" size="lg" style={{ marginLeft: "45%" }}>
                                Отправить
                            </Button>
                        </>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Credit;