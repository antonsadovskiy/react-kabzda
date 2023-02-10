import React, {useState} from 'react';

export function OnOff() {

    let [on, setOn] = useState<boolean>(false)

    const changeFilter = (value: boolean) => {
        setOn(value)
    }

    const turnOn = () => {
        changeFilter(true)
    }

    const turnOff = () => {
        changeFilter(false)
    }

    let container = {
        display: "flex",
        gap: "10px",
    }
    let turnOnStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "20px",
        border: "1px solid black",
        backgroundColor: on? "green" : "white",
    }
    let turnOffStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "20px",
        border: "1px solid black",
        backgroundColor: !on? "red" : "white"
    }
    let lampStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: on? "green" : "red",
    }

    return (
        <div style={container}>
            <button style={turnOnStyle} onClick={turnOn}>
                on
            </button>
            <button style={turnOffStyle} onClick={turnOff}>
                off
            </button>
            <div style={lampStyle}>
            </div>
        </div>
    )
}

export default OnOff;