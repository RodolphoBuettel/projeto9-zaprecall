import { useState } from "react";
import styled from "styled-components"
import setaPlay from "./assets/img/seta_play.png";
import setaVirar from "./assets/img/seta_virar.png";

export default function FlashCards({ card, n, setConcluidos, concluidos}) {
	console.log(concluidos);
    const [apareceResposta, setApareceRespota] = useState("none");
    const [aparecePergunta, setAparecePergunta] = useState("");
    const [habilitaPergunta, setHabilitaPergunta] = useState("none");
    
    function VerResposta() {
        const mostraResposta = "";
        setApareceRespota(mostraResposta);
        setHabilitaPergunta("none");
    }

    function VerPergunta(){
        const mostraPergunta = "none";
        setAparecePergunta(mostraPergunta);
        setHabilitaPergunta("");
		setConcluidos(concluidos + 1);
    }

    return (
        <>
            <PerguntaFechada aparecePergunta={aparecePergunta}>
                <p>Pergunta {n} </p>
                <img src={setaPlay} onClick={VerPergunta}/>
            </PerguntaFechada>
            <Pergunta habilitaPergunta={habilitaPergunta}>
                <p>{card.pergunta}</p>
                <img src={setaVirar} onClick={VerResposta} />
            </Pergunta>
            <Resposta apareceResposta={apareceResposta}>
                <p>{card.resposta}</p>
            </Resposta>

        </>)
}


const PerguntaFechada = styled.div`
	width: 300px;
	height: 35px;
	background-color: #ffffff;
	margin: 12px;
	padding: 15px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	display: flex;
    display: ${props => props.aparecePergunta};
	align-items: center;
	justify-content: space-between;
	p {
		font-family: "Recursive";
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 19px;
		color: #333333;
	}
`;
const Pergunta = styled.div`
	width: 300px;
	margin: 12px;
	padding: 15px;
	min-height: 100px;
	background: #ffffd5;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	font-family: "Recursive";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #333333;
    display: ${props => props.habilitaPergunta};
    position: relative;
	flex-direction: column;
	justify-content: space-between;
	img {
        position: absolute;
        width: 30px;
		bottom: 10px;
		margin-left: 275px;
	}
`;

const Resposta = styled.div`
	width: 300px;
	margin: 12px;
	padding: 15px;
	min-height: 100px;
	background: #ffffd5;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	font-family: "Recursive";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #333333;
	display: flex;
    display: ${props => props.apareceResposta};
	flex-direction: column;
	justify-content: space-between;
   
`;