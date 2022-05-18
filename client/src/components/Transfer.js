import React from "react";
import "../styles/Transfer.css";
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { InputGroup, FormControl, Button } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";
import Footer from "./Footer";


const Transfer = () => {

    const navigate = useNavigate()
    const [receiverEmail, setReceiverEmail] = useState()
    const [amount, setAmount] = useState('')
    const [desc, setDesc] = useState('')

    async function transferMoney(event) {
        event.preventDefault()

        const req = await fetch('http://localhost:8000/api/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                email: receiverEmail,
                balance: amount,
                desc: desc,
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
            <div>
                <div className="bgh">
                    <h1 className="transfer-heading">Перводы клиентам банка</h1>
                    <div className="leftc">
                        <h3 className="transfer-title">Текущий перевод</h3>
                        <>


                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Почта клиента"
                                    value={receiverEmail}
                                    onChange={(e) => setReceiverEmail(e.target.value)}
                                    aria-label=" Acc No"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text>Сумма</InputGroup.Text>
                                <FormControl 
                                    aria-label="Amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)} />
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>

                            <InputGroup>
                                <InputGroup.Text>Сообщение к переводу</InputGroup.Text>
                                <FormControl 
                                    as="textarea" 
                                    aria-label="With textarea"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)} />
                            </InputGroup>

                            <Button className="mt-3" variant="primary" size="lg" onClick={transferMoney}>Перевести</Button>
                        </>
                    </div>
                    <div className="rightc">
                        <img src="https://cdn.pixabay.com/photo/2013/07/12/12/14/euro-145386_1280.png" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Transfer;