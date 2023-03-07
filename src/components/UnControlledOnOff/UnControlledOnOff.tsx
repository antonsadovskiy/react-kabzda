import React, {useState} from 'react';

type UnControlledOnOffPropsType = {
    onChange: (value: boolean) => void
    defaultOn?: boolean
}

export function UnControlledOnOff(props: UnControlledOnOffPropsType) {

    let [on, setOn] = useState<boolean>(props.defaultOn? props.defaultOn : false)

    const changeFilter = (value: boolean) => {
        setOn(value)
    }

    const onClicked = () => {
        changeFilter(true)
        props.onChange(true)
    }
    const offClicked = () => {
        changeFilter(false)
        props.onChange(false)
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
            <button style={turnOnStyle} onClick={onClicked}>
                on
            </button>
            <button style={turnOffStyle} onClick={offClicked}>
                off
            </button>
            <div style={lampStyle}>
            </div>
        </div>
    )
}