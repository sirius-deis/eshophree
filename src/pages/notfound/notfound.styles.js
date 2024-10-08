import styled from 'styled-components';

const StyledNotFound = styled.div`
    text-align: center;
    position: absolute;
    width: 100%;
    height: calc(100%-17rem);
    overflow: hidden;
    .cont_error {
        position: absolute;
        width: 100%;
        height: 300px;
        top: 50%;
        margin-top: -150px;
    }
    .cont_error > h1  {
        font-family: 'Lato', sans-serif;  
        font-weight: 400;
        font-size:150px;
        color: var(--default-darker);
        position: relative;
        left:-100%;
        transition: all 0.5s;
       }
       
       
    .cont_error > p  {
        font-family: 'Lato', sans-serif;  
        font-weight: 300;
        font-size:24px;
        letter-spacing: 5px;
        color: var(--primary);
        position: relative;
        left:100%;
        transition: all 0.5s;
        transition-delay: 0.5s;
        -webkit-transition: all 0.5s;
        -webkit-transition-delay: 0.5s;
    }
       
       .cont_aura_1 {
        position:absolute;
        width:300px;
        height: 120%;
        top:25px;
        right: -340px;
        background-color: var(--primary);
        box-shadow: 0px 0px  60px  20px  var(--shadow-color);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
       }
       
       .cont_aura_2 {
         position:absolute;
         width:100%;
         height: 300px;
       right:-10%;
       bottom:-301px;
        background-color: var(--text-color-darker);
       box-shadow: 0px 0px 60px 10px var(--shadow-color-darker),0px 0px  20px  0px  rgba(0,0,0,0.1);
         z-index:5;
       transition: all 0.5s;
       -webkit-transition: all 0.5s;
       }
       
       .cont_error > h1 {
         left:0%;
       }
       .cont_error > p {
         left:0%;
       }
       
       .cont_aura_2 {
           animation-name: animation_error_2;
           animation-duration: 4s;
         animation-timing-function: linear;
           animation-iteration-count: infinite;
           animation-direction: alternate;
       transform: rotate(-20deg);    
       }
       .cont_aura_1 {
        transform: rotate(20deg);
         right:-170px;
           animation-name: animation_error_1;
           animation-duration: 4s;
         animation-timing-function: linear;
           animation-iteration-count: infinite;
           animation-direction: alternate;
       }
       
       @-webkit-keyframes animation_error_1 {
         from {
           -webkit-transform: rotate(20deg);
         transform: rotate(20deg);
         }
         to {  -webkit-transform: rotate(25deg);
         transform: rotate(25deg);
         }
       }
       @-o-keyframes animation_error_1 {
         from {
           -webkit-transform: rotate(20deg);
         transform: rotate(20deg);
         }
         to {  -webkit-transform: rotate(25deg);
         transform: rotate(25deg);
         }
       
       }
       @-moz-keyframes animation_error_1 {
         from {
           -webkit-transform: rotate(20deg);
         transform: rotate(20deg);
         }
         to {  -webkit-transform: rotate(25deg);
         transform: rotate(25deg);
         }
       
       }
       @keyframes animation_error_1 {
         from {
           -webkit-transform: rotate(20deg);
         transform: rotate(20deg);
         }
         to {  -webkit-transform: rotate(25deg);
         transform: rotate(25deg);
         }
       }
       
       @-webkit-keyframes animation_error_2 {
         from { -webkit-transform: rotate(-15deg); 
         transform: rotate(-15deg);
         }
         to { -webkit-transform: rotate(-20deg);
         transform: rotate(-20deg);
         }
       }
       @-o-keyframes animation_error_2 {
         from { -webkit-transform: rotate(-15deg); 
         transform: rotate(-15deg);
         }
         to { -webkit-transform: rotate(-20deg);
         transform: rotate(-20deg);
         }
       }
       }
       @-moz-keyframes animation_error_2 {
         from { -webkit-transform: rotate(-15deg); 
         transform: rotate(-15deg);
         }
         to { -webkit-transform: rotate(-20deg);
         transform: rotate(-20deg);
         }
       }
       @keyframes animation_error_2 {
         from { -webkit-transform: rotate(-15deg); 
         transform: rotate(-15deg);
         }
         to { -webkit-transform: rotate(-20deg);
         transform: rotate(-20deg);
         }
       }
`;

export default StyledNotFound;
