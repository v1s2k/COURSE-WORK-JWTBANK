import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode"
import "bootstrap/dist/css/bootstrap.min.css";
import profilepic from "../assets/user.jpg"
import "../styles/ProfileNew.css"
import { useNavigate } from "react-router";
import NavBarLoggedIn from "./NavBarLoggedIn";

const ProfileNew = () => {

    const [accountId, setAccountId] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [balance, setBalance] = useState()
    const [city, setCity] = useState('')
    const [region, setRegion] = useState('')
    const [fd, setFd] = useState()

    const navigate = useNavigate()



    async function populateInfo() {

        const req = await fetch('http://localhost:8000/api/user', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
        })

        const data = await req.json()
        if (data.status === 'ok') {
            setAccountId(data.id)
            setFirstName(data.fname)
            setLastName(data.lname)
            setEmail(data.email)
            setAddress(data.address)
            setContact(data.contact)
            setCity(data.city)
            setRegion(data.state)
            setBalance(data.balance)
            setFd(data.fd_amount)
        }
        else {
            alert(data.error)
        }
    }

    async function populateBalance() {

        const req = await fetch('http://localhost:8000/api/balance', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
        })

        const data = await req.json()
        if (data.status === 'ok') {
            setBalance(data.balance)
        }
        else {
            alert(data.error)
        }
    }



    async function getUpdatedFd() {

        const req = await fetch('http://localhost:8000/api/updatedfd', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
        })

        const data = req.json()
        if (data.status === 'ok') {
            setFd(data.newFd)
        }
        else {
            alert(data.error)
        }
    }


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt_decode(token)
            if (!user) {
                localStorage.removeItem(token)
                navigate('/login', { replace: true })
            }
            else {

                populateInfo()


            }
        }

    }, [])

    return (
        <div>
            <NavBarLoggedIn />
            <div className="container mt-4" style={{ color: "white", border: "6px dotted purple", borderRadius: "20px" }}>
                <div className="top">
                    <div className="grid">
                        <div className="c1">
                            <img src={profilepic} alt="" className="image" />
                        </div>
                        <div className="c2">
                            <h2 className="display-4">{firstName} {lastName}</h2>

                            <p>ID профиля : {accountId}</p>
                            <p>Баланс счета : {balance}</p>

                            
                           
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="profile-info">
                        <p>Адрес : {address}, {city} , {region}</p>
                        <p>Контактные данные : {contact} </p>
                        <p>Email : {email}</p>


                        <p className="lead">
                            <a className="btn btn-primary btn-lg mb-2" href="#" role="button">
                                Редактировать данные
                            </a>
                        </p>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default ProfileNew;