import React, {useState} from 'react';
import Select, {ItemType} from "./Select";
import UnControlledSelect from "../UncontrolledSelect/UncontrolledSelect";

export default {
    title: 'Select',
    component: Select,
};

export const ControlledSelect = () => {
    const items: Array<ItemType> = [
        {id: 1, title: 'React'},
        {id: 2, title: 'TypeScript'},
        {id: 3, title: 'Redux'},
        {id: 4, title: 'StoryBook'},
    ]
    const [title, setTitle] = useState<string>('none')
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onChangeHandler = (newTitle: string) => {
        setTitle(newTitle)
    }

    return (
        <Select collapsed={collapsed}
                setCollapsed={setCollapsed}
                items={items}
                title={title}
                onChange={onChangeHandler}/>
    )

}

export const UncontrolledSelect = () => {
    const items: Array<ItemType> = [
        {id: 1, title: 'React'},
        {id: 2, title: 'TypeScript'},
        {id: 3, title: 'Redux'},
        {id: 4, title: 'StoryBook'},
    ]

    return (
        <UnControlledSelect items={items}/>
    )

}