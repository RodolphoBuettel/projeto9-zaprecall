import Botoes from "./Botoes";
import CardsConcluidos from "./CardsConcluidos";

export default function Fotter({concluidos}) {
    return (
        <footer className="footer-concluidos">
            <Botoes />
            <CardsConcluidos concluidos={concluidos} />
        </footer>)
}