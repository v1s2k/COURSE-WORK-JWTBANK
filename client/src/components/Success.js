import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/alerts.css";
import { Alert } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";
import Footer from "./Footer";

const Success = () => {
    return (
        <div>
            <NavBarLoggedIn />
            <div className="bgsucc">
                <div className="container">
                    <Alert variant="success">
                        <Alert.Heading>Привет, рады вас видеть!</Alert.Heading>
                        <p>
                            Ваша транзакция прошла успешно. Благодарим Вас за то, что Вы выбрали нас в качестве своего банковского партнера. Мы рады обслужить вас и удовлетворить ваши финансовые потребности. FRZ bank благодарит вас за ваше терпение.
                    </p>
                        <hr />
                        <p className="mb-0">
                            Для получения более подробной информации и запросов, свяжитесь с нами по адресу frzbank@gmail.com
                    </p>
                    </Alert>
                </div>
            </div>
            <Footer />
        </div>


    );
}

export default Success;