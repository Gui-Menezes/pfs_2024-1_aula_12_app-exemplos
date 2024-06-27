import { useState } from "react";

export default function Counter() {
    const [contador, setContador] = useState(0);

    const incrementa = () => {
        setContador(contador+1);
        console.log(contador);
    }

    return (
        <>
        <button onClick={incrementa}>+</button>
        {contador}
        <br />
        </>
    )
}