import React, {ChangeEvent, useMemo, useState} from "react";

export default {
    title: "useMemo",
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    const onChangeHandlerA = (e: ChangeEvent<HTMLInputElement>) => {
        setA(+e.currentTarget.value)
    }
    const onChangeHandlerB = (e: ChangeEvent<HTMLInputElement>) => {
        setB(+e.currentTarget.value)
    }

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++){
            let fake = 0
            while (fake < 100000000){
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++){
        resultB *= i
    }

    return (
        <>
            <input type={'number'} value={a} onChange={onChangeHandlerA}/>
            <input type={'number'} value={b} onChange={onChangeHandlerB}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

const UsersSecret = (props: {users: Array<string>}) => {

    console.log("USERS SECRET")
    return (
        <div>
            {props.users.map((user, index) => <div key={index}>{user}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Anton', 'Dima', 'Diana', 'Makar'])

    const addUser = () => {
        const newUsers = [...users, 'Dasha']
        setUsers(newUsers)
    }

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("d") > -1)
    }, [users])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}