import React, { useState } from 'react';
import styled from 'styled-components';
import seta_play from '../assets/img/seta_play.png'
import seta_virar from '../assets/img/seta_virar.png'
import icone_erro from '../assets/img/icone_erro.png'
import icone_quase from '../assets/img/icone_quase.png'
import icone_certo from '../assets/img/icone_certo.png'
import Rodape from './Rodape'

function Cards({iniciar, cards}){

    const [contador, setContador] = useState(0);
    const tamanho = cards.length;
    return(  
    <>
    <CardsRecall iniciar={iniciar}>
        {cards.map((c,index) =>
                    <Card 
                    question = {c.question}
                    answer = {c.answer}
                    index = {index}
                    contador={contador}
                    setContador={setContador}
                    
                    />)}

    </CardsRecall>
    <Rodape iniciar={iniciar} contador={contador} tamanho={tamanho}/> 
    </>);

}
export default Cards;

function Card({question,answer, index,contador,setContador}){

    const [abrirPergunta, setabrirPergunta] = useState(false);
    const [abrirResposta, setabrirResposta] = useState(false);
    const [icone, setIcone] = useState(seta_play);
    const [errou,setErrou] = useState(false);
    const [quaseErrou, setQuaseErrou] = useState(false);
    const [acertou, setAcertou] = useState(false);
    const [testeIcon, setTesteIcon] = useState("play-btn");
    

    function mostrarCard() {
        setabrirPergunta(true);
        
        }
    function virarCard(){
        setabrirResposta(true);

    }
    function naoLembrou(){
        setabrirPergunta(false);
        setabrirResposta(false);
        setIcone(icone_erro);
        setErrou(true); 
        setTesteIcon("no-icon");
        setContador(contador + 1);

        
    }
    function quasenaoLembrou(){
        setabrirPergunta(false);
        setabrirResposta(false);
        setIcone(icone_quase);
        setQuaseErrou(true);
        setTesteIcon("partial-icon");
        setContador(contador + 1);

    }

    function lembrou(){
        setabrirPergunta(false);
        setabrirResposta(false);
        setIcone(icone_certo);
        setAcertou(true);
        setTesteIcon("zap-icon");
        setContador(contador + 1);
    }
      
    return(abrirPergunta? 
        (abrirResposta? 
        <CardRecall abrirPergunta={abrirPergunta}><span data-test="flashcard-text" >{answer}</span>
        <Lembretes><CardVermelho  data-test="no-btn" onClick={naoLembrou}>N??o lembrei</CardVermelho>
        <CardLaranja data-test="partial-btn" onClick={quasenaoLembrou}>Quase n??o lembrei</CardLaranja>
        <CardVerde data-test="zap-btn" onClick={lembrou} >Zap!</CardVerde>
        </Lembretes>
        </CardRecall>:
        <CardRecall abrirPergunta={abrirPergunta} data-test="flashcard"> 
        <span data-test="flashcard-text">{question}</span> 
        <img data-test="turn-btn" src={seta_virar} alt="seta_virar" onClick={virarCard}/></CardRecall>):
        <CardRecall abrirPergunta={abrirPergunta} errou={errou} quaseErrou = {quaseErrou} acertou={acertou} data-test="flashcard"> 
        <span data-test="flashcard-text"> Pergunta {index +1}</span> 
        <img  data-test={testeIcon} src={icone} alt={icone} onClick={mostrarCard}/>
        </CardRecall>);
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
height: ${props => props.abrirPergunta ? '131px':'45px'};
margin-bottom: 25px;
background:${props => props.abrirPergunta ? '#FFFFD5':'#FFFFFF'};
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color:${props => props.errou ? '#FF3030':(props.quaseErrou ? '#FF922E':props.acertou ? '#2FBE34':'#333333')};
text-decoration-line:${props => props.errou ? 'line-through':(props.quaseErrou ? 'line-through': props.acertou ? 'line-through':'none')};
padding: 15px;
display:flex;
flex-direction:${props => props.abrirPergunta ? 'column':'row'};
align-items:${props => props.abrirPergunta ? 'none':'center'};
justify-content:${props => props.abrirPergunta ? 'none':'space-between'};
img {
    width:${props => props.abrirPergunta ? '30px':'20'};
    height:20px;
    margin-left: ${props => props.abrirPergunta ? '254px':'0'};
    margin-top:${props => props.abrirPergunta ? '100px':'0'};
    
}

`
const Lembretes = styled.div`
display:flex;
justify-content:space-between;
margin-top: 50px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 14px;
color: #FFFFFF;

`


const CardVermelho = styled.div`
width: 85px;
height: 37px;
background: #FF3030;
border-radius: 5px;
text-align: center;
display: flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`
const CardLaranja = styled.div`
width: 85px;
height: 37px;
background: #FF922E;
border-radius: 5px;
text-align: center;
display: flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;`

const CardVerde = styled.div`
width: 85px;
height: 37px;
background: #2FBE34;
border-radius: 5px;
text-align: center;
display: flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;`