import styled from 'styled-components';
import seta_play from '../assets/img/seta_play.png'

function Perguntas({iniciar}){
    return(  
    <PerguntasRecall iniciar={iniciar}>
         <Pergunta >Pergunta 1 <img  src={seta_play} alt="seta_play"/> </Pergunta>
         <Pergunta >Pergunta 2 <img  src={seta_play} alt="seta_play"/> </Pergunta>
         <Pergunta >Pergunta 3 <img  src={seta_play} alt="seta_play"/> </Pergunta>
         <Pergunta >Pergunta 4 <img  src={seta_play} alt="seta_play"/> </Pergunta>
    </PerguntasRecall>);

}
export default Perguntas;

const PerguntasRecall = styled.div`
display: ${props => props.iniciar ? 'block':'none'};
margin-top: 58px;
`

const Pergunta = styled.div`
width: 300px;
height: 65px;
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