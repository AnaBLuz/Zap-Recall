import React, { useState } from 'react';
import styled from 'styled-components';
import seta_play from '../assets/img/seta_play.png'

function Cards({iniciar}){

    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]


    return(  
    <CardsRecall iniciar={iniciar}>
        {cards.map((c,index) =>
                    <Card 
                    question = {c.question}
                    index = {index}
                    
                    />)}

    </CardsRecall>);

}
export default Cards;

function Card({question, index}){

    const [abrirPergunta, setabrirPergunta] = useState(false);

    function mostrarCard() {
        setabrirPergunta(true);

        }
      
    return(abrirPergunta? 
        <CardRecall data-test="flashcard">{question}</CardRecall>:
        <CardRecall data-test="flashcard">Pergunta {index +1} <img  data-test="play-btn" src={seta_play} alt="seta_play" onClick={mostrarCard}/></CardRecall>);
}





const CardsRecall = styled.div`
display: ${props => props.iniciar ? 'block':'none'};
margin-top: 50px;
height: 335px;
overflow:hidden;
overflow-y:scroll;
`

const CardRecall = styled.div`
width: 300px;
height: 45px;
margin-bottom: 25px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
padding: 15px;
display:flex;
align-items:center;
justify-content:space-between;
`