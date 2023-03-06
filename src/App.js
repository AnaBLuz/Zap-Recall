import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import logo from './assets/img/logo.png'
import Cards from './components/Cards'


function App() {
  const [iniciar, setIniciar] = useState(false);
  

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

  function iniciarRecall() {
    setIniciar(true);
  }
  
  return (
    <>
    <GlobalStyle />
  <Tela>
    <LogoOuTopo iniciar={iniciar} >
      <img  src={logo} alt="logo"/>
      <nomeZap>ZapRecall</nomeZap>
      <button data-test="start-btn" onClick={iniciarRecall}>Iniciar Recall!</button>
    </LogoOuTopo>
    <Cards iniciar={iniciar} cards={cards} />
  </Tela>
  </>
  );
 
}
export default App;
const Tela = styled.div`
 width: 375px;
 height: 667px;
 background: #FB6B6B;
 border: 1px solid #DBDBDB;
 display:flex;
 flex-direction: column;
 align-items:center;
 `;

const LogoOuTopo = styled.div`
 display:flex;
 flex-direction: ${props => props.iniciar ? 'row' : 'column'};
 align-items: ${props => props.iniciar ? 'none': 'center'};
 justify-content: ${props => props.iniciar ? 'center' : 'none'};
 img{
  width: ${props => props.iniciar ? '52px':'136px'};
  height: ${props => props.iniciar ? '60px' : '161px'};
  margin-top: ${props => props.iniciar ? '42px':'148px'};
  }
  nomeZap{
    width: ${props => props.iniciar ? '203px':'257px'};
    height:${props => props.iniciar ? '44px' : '59px'};
    margin-top:${props => props.iniciar ? '42px':'15px'};
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    text-align:center;
    color: #FFFFFF;
    
  }
 button{
  width: 246px;
  height: 54px;
  background: #FFFFFF;
  border: 1px solid #D70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #D70900;
  display:flex;
  align-items:center;
  justify-content:center;
  display: ${props => props.iniciar ? 'none':'block'};
 }
`;




