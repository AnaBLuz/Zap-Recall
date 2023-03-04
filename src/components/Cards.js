
import styled from 'styled-components';
import seta_play from '../assets/img/seta_play.png'



function Cards({iniciar, textoCard, abrirPergunta,mostrarCard}){
    return(  
    <CardsRecall iniciar={iniciar}>
        
                    {abrirPergunta? 
                    <CardRecall>{textoCard}</CardRecall>:<CardRecall>Pergunta 1 <img  src={seta_play} alt="seta_play" onClick={mostrarCard}/> </CardRecall>} 
    
         
    </CardsRecall>);

}
export default Cards;


const CardsRecall = styled.div`
display: ${props => props.iniciar ? 'block':'none'};
margin-top: 50px;
height: 335px;
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