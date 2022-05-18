import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "../styles/FD.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";
import Footer from "./Footer";



const FD = () => {
    const navigate = useNavigate()
    const [amount, setAmount] = useState()
    const [time, setTime] = useState()

    const createFD = async(event) => {
        event.preventDefault()
        const req = await fetch('http://localhost:8000/api/fd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                amount: amount,
                time: time,
            })
        })

        const data = await req.json()
        console.log(data)
        if(data.status === 'ok'){
            navigate('/confirmation')
        }
    }


    return (
        <div>
            <NavBarLoggedIn />
            <div className="bghfd">
                <h1> Cрочный вклад</h1>
                <div className="leftc">
                    <>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>₽ Сумма</InputGroup.Text>
                            <FormControl
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)} />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>Срок</InputGroup.Text>
                            <FormControl 
                                aria-label="Срок"
                                value={time}
                                onChange={(e) => setTime(e.target.value)} />
                            <InputGroup.Text>Лет</InputGroup.Text>
                        </InputGroup>

                        <Button className="mt-3" variant="primary" size="lg" onClick={createFD}>Подтвердить</Button>
                    </>
                </div>
                <div className="rightc">
                    <img src="https://cdn.pixabay.com/photo/2015/11/17/02/18/hourglass-1046841_1280.png" alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FD;