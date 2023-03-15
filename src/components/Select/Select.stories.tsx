import React, {useState} from 'react';
import {Select, ItemType} from "./Select";
import {UncontrolledSelect} from "../UncontrolledSelect/UncontrolledSelect";

export default {
    title: 'Select',
    component: Select,
};

export const ControlledSelect = () => {

    const [selectedItem, setSelectedItem] = useState<ItemType>({id: 1, title: 'React'})

    const items: Array<ItemType> = [
        {id: 1, title: 'React'},
        {id: 2, title: 'TypeScript'},
        {id: 3, title: 'Redux'},
        {id: 4, title: 'StoryBook'},
    ]


    const onChangeHandler = (itemId: number) => {
        const newSelectedItem  = items.find(item => item.id === itemId)
        if (newSelectedItem){
            setSelectedItem(newSelectedItem)
        }
    }

    return (
            <Select items={items}
                    selectedItem={selectedItem}
                    onChange={onChangeHandler}/>
    )

}

export const UnControlledSelect = () => {
    const items: Array<ItemType> = [
        {id: 1, title: 'React'},
        {id: 2, title: 'TypeScript'},
        {id: 3, title: 'Redux'},
        {id: 4, title: 'StoryBook'},
    ]

    return (
        // <UncontrolledSelect items={items} />
        <div></div>
    )

}