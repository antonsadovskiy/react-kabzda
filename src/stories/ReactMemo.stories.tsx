import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounterSecret = (props: {count: number}) => {
    console.log("NEW MESSAGE")
    return (
        <div>{props.count}</div>
    )
}
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)


const UsersSecret = (props: {users: Array<string>}) => {
    console.log("USERS")
    return (
        <div>
            {props.users.map((user, index) => <div key={index}>{user}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)


export const Example1 = () => {
    // console.log('EXAMPLE')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Anton', 'Dima', 'Diana', 'Makar'])

    const addUser = () => {
        setUsers([...users, 'Pasha'])
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}