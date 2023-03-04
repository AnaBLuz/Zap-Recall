import styled from 'styled-components';


function Rodape({iniciar}){
    return(
        <RodapeRecall iniciar={iniciar}>0/4 CONCLUÍDOS</RodapeRecall>
    );
}
export default Rodape;

const RodapeRecall = styled.div`
display: ${props => props.iniciar ? 'flex':'none'};
width: 375px;
height: 70px;
background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
position: fixed; 
top: 610px;
justify-content: center;
align-items:center;

`;