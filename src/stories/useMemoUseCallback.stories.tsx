import React, {ChangeEvent, FC, useCallback, useMemo, useState} from "react";

export default {
    title: "useMemoUseCallback",
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

export const LikeUseCallback = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'TypeScript', 'Redux', 'JavaScript'])


    const memorizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular']
            setBooks(newBooks)
        }
    }, [books])

    const memorizedAddBook2 = useCallback(() => {
        const newBooks = [...books, 'Angular']
        setBooks(newBooks)
    }, [books])

    const newArray = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf("a") > -1)
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books books={newArray} addBook={memorizedAddBook2}/>
        </>
    )
}


type BooksPropsType = {
    books: Array<string>
    addBook: () => void
}

const BooksSecret: FC<BooksPropsType> = (props) => {

    console.log("BOOKS SECRET")
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
            {props.books.map((book, index) => <div key={index}>{book}</div>)}
        </div>
    )
}
const Books = React.memo(BooksSecret)