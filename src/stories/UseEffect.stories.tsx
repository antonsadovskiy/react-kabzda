import {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo'
}

export const Example1 = () => {
    const [counter, setCounter] = useState(1)
    console.log('EXAMPLE 1')

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title = 'User'
    })

    return (
        <div>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}

export const SetTimeoutExample = () => {
    console.log('SET TIMEOUT EXAMPLE')

    const [date, setDate] = useState(new Date())

    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    },[])

    return (
        <div>
            <h2>Time</h2>
            <p>{hours}:{minutes}:{seconds}</p>
        </div>
    )
}