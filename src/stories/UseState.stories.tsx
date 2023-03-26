import {useState} from "react";

export default {
    title: 'UseState demo'
}

const generateData = () => {
    // difficult calculating
    return 1
}

export const Example1 = () => {
    console.log('EXAMPLE 1')
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

    return (
        <div>
            <span>{counter}</span>
            <button onClick={() => {setCounter(changer)}}>+</button>
        </div>
    )
}