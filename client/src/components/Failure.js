import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/alerts.css";
import { Alert } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";
import Footer from "./Footer";

const Failure = () => {
    return (
        <div>
            <NavBarLoggedIn />
            <div className="bgsucc">
                <div className="container">
                    <Alert variant="danger">
                        <Alert.Heading>Привет, рады вас видеть</Alert.Heading>
                        <p>
                            Ваша транзакция по какой-то причине завершилась неудачей. В настоящее время мы изучаем этот вопрос и свяжемся с вами как можно скорее с решением. Мы благодарим вас за ваше терпение.
                            Спасибо.
                    </p>
                        <hr />
                        <p className="mb-0">
                            По любым вопросам обращайтесь к нам по адресу www.FrzBank.com
                    </p>
                    </Alert>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Failure;