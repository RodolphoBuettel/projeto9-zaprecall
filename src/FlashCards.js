import { useState } from "react";
import styled from "styled-components"

import setaPlay from "./assets/img/seta_play.png";
import setaVirar from "./assets/img/seta_virar.png";
import iconeCerto from "./assets/img/icone_certo.png";
import iconeErro from "./assets/img/icone_erro.png";
import iconeQuase from "./assets/img/icone_quase.png";
import party from "./assets/img/party.png";
import sad from "./assets/img/sad.png";

export default function FlashCards({ card, n, setConcluidos, concluidos }) {
	console.log(concluidos);
	const [apareceResposta, setApareceRespota] = useState("none");
	const [aparecePergunta, setAparecePergunta] = useState("");
	const [habilitaPergunta, setHabilitaPergunta] = useState("none");
	const [imagem, setImagem] = useState(setaPlay);
	const [risco, setRisco] = useState("");
	const [color, setColor] = useState("");
	const [colorText, setColorText] = useState(" ")

	function VerResposta() {
		const mostraResposta = "";
		setApareceRespota(mostraResposta);
		setHabilitaPergunta("none");
	}

	function VerPergunta() {
		const mostraPergunta = "none";
		setAparecePergunta(mostraPergunta);
		setHabilitaPergunta("");
		setConcluidos(concluidos + 1);
	}


	function NaoLembrei(){
         setAparecePergunta(" ");
		 setApareceRespota("none");
		 setImagem(iconeErro);
		 setRisco("line-through");
		 setColor("#ff3030");
		 setColorText("#ff3030");
    }

    function QuaseNaoLembrei(){
		setAparecePergunta(" ");
		 setApareceRespota("none");
		 setImagem(iconeQuase);
		 setRisco("line-through");
		 setColor("#ff922e");
		 setColorText("#ff922e");
    }

    function Zap(){
		setAparecePergunta(" ");
		 setApareceRespota("none");
		 setImagem(iconeCerto);
		 setRisco("line-through");
		 setColor("#2fbe34");
		 setColorText("#2fbe34");
    }

	return (
		<>
			<PerguntaFechada aparecePergunta={aparecePergunta} risco={risco} color={color} colorText={colorText}>
				<p>Pergunta {n} </p>
				<img src={imagem} onClick={VerPergunta} />
			</PerguntaFechada>
			<Pergunta habilitaPergunta={habilitaPergunta}>
				<p>{card.pergunta}</p>
				<img src={setaVirar} onClick={VerResposta} />
			</Pergunta>
			<Resposta apareceResposta={apareceResposta}>
				<p>{card.resposta}</p>
				<ContainerBotoes>
				<Botao className="naoLembrei" onClick={NaoLembrei}>Não lembrei</Botao>
				<Botao className="quaseNaoLembrei" onClick={QuaseNaoLembrei} >Quase não lembrei</Botao>
				<Botao className="zap" onClick={Zap} >Zap!</Botao>
				</ContainerBotoes>
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
		text-decoration: ${props => props.risco};
		text-decoration-color: ${props => props.color};
		font-family: "Recursive";
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 19px;
		color: ${props => props.colorText};
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


const Botao = styled.button`
	width: 90px;
font-family: 'Recursive', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
margin-left: 10px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
border-radius: 5px;
border: none;
padding:5px;
`
const ContainerBotoes = styled.div`
    display: flex;
  width: 80%;
  justify-content: space-evenly;
  margin: 20px;
`