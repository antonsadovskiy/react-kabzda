import {useState} from "react";

export default {
    title: 'Timer story'
}

export const Timer = () => {

    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const [date, setDate] = useState(new Date())

    const start = () => {
        const timerId = setInterval(() => setDate(new Date()), 1000)
        setTimerId(+timerId)
    }
    const stop = () => {
        setDate(date)
        clearInterval(timerId)
    }

    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const year = date.getFullYear()

    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

    return (
        <div>
            <div>
                <span>Date: </span><span>{day}.</span><span>{month}.</span><span>{year}</span>
            </div>
            <div>
                <span>Time: </span><span>{hours}:</span><span>{minutes}:</span><span>{seconds}</span>
            </div>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
        </div>
    )
}