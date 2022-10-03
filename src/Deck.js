
import FlashCards from "./FlashCards";

export default function Deck({ deck, concluidos, setConcluidos}) {
    return (
        <>
            {deck.map((card, index) =>
            <FlashCards card={card} key={index} n={index  +1 } concluidos={concluidos} setConcluidos={setConcluidos}/>
           )}
        </>)
}
