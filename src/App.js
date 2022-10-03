import React, { useState } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Fotter from "./Fotter";
import Deck from "./Deck";
import FlashCards from "./FlashCards";
import GlobalStyle from "./GlobalStyle";

const deck = [
    { pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
    { pergunta: " O React é __ ", resposta: "uma biblioteca JavaScript para construção de interfaces" },
    { pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula" },
    { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
    { pergunta: " O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma" },
    { pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências" },
    { pergunta: " Usamos props para __ ", resposta: "passar diferentes informações para componentes " },
    { pergunta: " Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
]

export default function App() {
    const [concluidos, setConcluidos] = useState(0);
    
    return (
        <ScreenContainer>
            <GlobalStyle />
            <Logo/>
            <Fotter concluidos={concluidos} setConcluidos={setConcluidos}/>
            <Deck deck={deck} concluidos={concluidos} setConcluidos={setConcluidos}>
                <FlashCards />
            </Deck>
        </ScreenContainer>
    )

}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`


