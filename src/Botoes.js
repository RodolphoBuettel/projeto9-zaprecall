import styled from "styled-components";

export default function Botoes() {

    return (
        <ContainerBotoes>
            <button className="naoLembrei">Não lembrei</button>
            <button className="quaseNaoLembrei">Quase não lembrei</button>
            <button className="zap">Zap!</button>
            </ContainerBotoes>
    )
}

const ContainerBotoes = styled.div`
    display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
    button{
        width: 90px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  border: none;
  padding:5px;
    }
`