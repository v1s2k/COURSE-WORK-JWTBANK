import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }
    body{
      background: rgb(131,58,180);
      background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(122,29,253,1) 47%, rgba(252,176,69,1) 91%);
        font-size: 1.2rem;
        font-weight: 400;
        font-family: 'Lato', sans-serif
    }
    .Before{
        position: relative;
        padding-left: 3rem;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 35px;
            background-color: rebeccapurple;
            height:2px;
        }
    }
`;

export default GlobalStyle;