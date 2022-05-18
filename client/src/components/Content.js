import React from "react";
import styled from "styled-components";
import SmallHead from "./SmallHead";
import blockchain from '../assets/bchain.png';

const Content = () => {
    return ( 
        <ContentStyle>
            <div className="content">
                <div className="left">
                    <SmallHead title={"FRZ BANK"} identifier={'Before'}/>
                    <h1>
                        Мы предлагаем нашим клиентам лучшие услуги, не выходя из дома.
                        Универсальный веб-сайт для ваших финансов.
                    </h1>
                    <p>
                        Просто зарегистрируйтесь и получите доступ к таким функциям, как перевод средств, внесение денег и создание вкладов.
                    </p>
                </div>
                <div className="right">
                    <img src={blockchain} alt="" />
                </div>
            </div>
        </ContentStyle>
    );
}

const ContentStyle = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    .left{
        text-align: left;
    }
    
    

    .content{
        color: white;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        height: 100%;
        width: 100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.8rem 0;
                font-size: 1.5em;
            }
        }
        .right{
            position: absolute;
            right: -11%;
            bottom: -1%;
            width: 60%;
        }
    }
`;

export default Content ;
