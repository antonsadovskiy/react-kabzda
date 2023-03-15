import React, {FC, useMemo, useState} from "react";
import {Select} from "../components/Select/Select";

export default {
    title: "memorized select",
}

export type CityType = {
    countryId: number
    cityId: number
    title: string
    population: number
}

export type MemorizedSelectPropsType = {
    items: Array<CityType>
    selectedItem: CityType
    setSelectedItem: (item: CityType) => void
}
const MemorizedSelect:FC<MemorizedSelectPropsType> = (props) => {
    console.log('MEMORIZED SELECT')

    const onChangeHandler = (itemId: number) => {
        const newSelectedItem = props.items.find(item => item.cityId === itemId)
        if (newSelectedItem) {
            props.setSelectedItem(newSelectedItem)
        }
    }

    return (
        <Select items={props.items}
                selectedItem={props.selectedItem}
                onChange={onChangeHandler}/>
    )
}
const MS = React.memo(MemorizedSelect)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')

    const [counter, setCounter] = useState(0)
    const [selectedItem1, setSelectedItem1] = useState<CityType>(
        {countryId: 1, cityId: 1, title: 'Minsk', population: 100}
    )
    const [selectedItem2, setSelectedItem2] = useState<CityType>(
        {countryId: 3, cityId: 9, title: 'Krasnodar', population: 120}
    )
    const [selectedItem3, setSelectedItem3] = useState<CityType>(
        {countryId: 2, cityId: 6, title: 'Donetsk', population: 60}
    )

    const [items, setItems] = useState<Array<CityType>>([
        {countryId: 1, cityId: 1, title: 'Minsk', population: 100},
        {countryId: 1, cityId: 2, title: 'Borisov', population: 90},
        {countryId: 1, cityId: 3, title: 'Brest', population: 95},
        {countryId: 2, cityId: 4, title: 'Kiev', population: 80},
        {countryId: 2, cityId: 5, title: 'Chernigov', population: 50},
        {countryId: 2, cityId: 6, title: 'Donetsk', population: 60},
        {countryId: 3, cityId: 7, title: 'Moscow', population: 200},
        {countryId: 3, cityId: 8, title: 'Saint-Peterburg', population: 150},
        {countryId: 3, cityId: 9, title: 'Krasnodar', population: 120},
    ])

    const Array1 = useMemo(() => {
        return items.filter(u => u.countryId === 1)
    }, [items])
    const Array2 = useMemo(() => {
        return items.filter(u => u.population > 100)
    }, [items])
    const Array3 = useMemo(() => {
        return items.filter(u => u.title.length < 10)
    }, [items])

    return (
        <div style={{display: 'flex'}}>
            <div style={{border: '1px solid black'}}>
                <span>cities from belarus</span>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                {counter}
                <MS items={Array1} selectedItem={selectedItem1} setSelectedItem={setSelectedItem1}/>
            </div>
            <div style={{border: '1px solid black'}}>
                <span>cities with population bigger than 100</span>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                {counter}
                <MS items={Array2} selectedItem={selectedItem2} setSelectedItem={setSelectedItem2}/>
            </div>
            <div style={{border: '1px solid black'}}>
                <span>cities with title length lower than 10</span>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                {counter}
                <MS items={Array3} selectedItem={selectedItem3} setSelectedItem={setSelectedItem3}/>
            </div>
        </div>

    )
}