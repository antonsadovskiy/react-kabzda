import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input',
    //
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [text, setText] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    return <><input onChange={onChangeHandler}/> - {text} </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [text, setText] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        if (inputRef.current) {
            setText(inputRef.current.value)
        }
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={onClickHandler}>get</button>
        actual value: {text}
    </>
}

export const ControlledInput = () => {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <input type="text" onChange={onChangeHandler} value={value}/>
            {value}
        </div>
    )
}

export const ControlledCheckBox = () => {
    const [value, setValue] = useState<boolean>(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return (
        <div>
            <input type="checkbox" onChange={onChangeHandler}/>
            <span>{value?.toString()}</span>
        </div>
    )
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <select value={value} onChange={onChangeHandler}>
                <option>none</option>
                <option value="1">Minsk</option>
                <option value="2">Moscow</option>
                <option value="3">Kiev</option>
            </select>
            <span>{value}</span>
        </div>
    )
}

export const ControlledInputWithFixedValue = () => <input value={'hello'}/>