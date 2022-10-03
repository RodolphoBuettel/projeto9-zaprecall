
import CardsConcluidos from "./CardsConcluidos";

export default function Fotter({concluidos}) {
    return (
        <footer className="footer-concluidos">
            <CardsConcluidos concluidos={concluidos} />
        </footer>)
}