import React, { useState } from "react";


export default function Contador() {
    const [conta, setConta] = useState(0);

function incremento() {
    setConta(prevConta => prevConta + 1)
}

function decremento() {
    setConta(prevConta => prevConta - 1)
}

return (
    <div>
        <h1>Contador</h1>
        <h2>Você clicou {conta} vezes!</h2>
        <button onClick={incremento}>Incremento</button>
        <button onClick={decremento}>Decremento</button>
    </div>
)
}