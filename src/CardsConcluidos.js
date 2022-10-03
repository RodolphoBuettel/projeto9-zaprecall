import { useState } from "react"


export default function CardsConcluidos({concluidos}){
    console.log(concluidos);
    return(
        <div className="card-concluidos">
                    <h2>{concluidos}/8 CONCLUÍDOS</h2>
                </div>
    )
}

