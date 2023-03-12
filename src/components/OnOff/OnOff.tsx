import React from 'react';

type OnOffPropsType = {
    filter: boolean
    changeFilter: (value: boolean) => void
}

function OnOffSecret(props: OnOffPropsType) {

    const setOn = () => {
        props.changeFilter(true)
    }
    const setOff = () => {
        props.changeFilter(false)
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
        backgroundColor: props.filter? "green" : "white",
    }
    let turnOffStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "20px",
        border: "1px solid black",
        backgroundColor: !props.filter? "red" : "white"
    }
    let lampStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor:  props.filter? "green" : "red",
    }

    return (
        <div style={container}>
            <button style={turnOnStyle} onClick={setOn}>
                on
            </button>
            <button style={turnOffStyle} onClick={setOff}>
                off
            </button>
            <div style={lampStyle}>
            </div>
        </div>
    )
}

export const OnOff = React.memo(OnOffSecret)