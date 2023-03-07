import React, {FC, useState} from 'react';
import s from './UncontrolledSelect.module.css'
import arrayDown from '../../assets/SelectAssets/Arrow-down.png'
import arrayUp from '../../assets/SelectAssets/Arrow-up.png'

export type ItemType = {
    id: number
    title: string
}

export type UncontrolledSelectPropsType = {
    items: ItemType[]
}

const UncontrolledSelect:FC<UncontrolledSelectPropsType> = (props) => {

    const [title, setTitle] = useState<string>('none')
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }
    const setMainTitle = (id: number) => {
        const newTitle = props.items.find(item => item.id === id)
        if (newTitle){
            setTitle(newTitle.title)
            setCollapsed(true)
        }
    }

    const arrowType = collapsed? arrayDown: arrayUp

    return (
        <div className={s.selectContainer}>
            <div className={s.selectItem}>
                <h3 onClick={onClickHandler}>{title}</h3>
                <img src={arrowType} alt="arrow"/>
            </div>
            {!collapsed && <SelectBody items={props.items} setMainTitle={setMainTitle}/>}
        </div>
    );
};

export type UncontrolledSelectBodyPropsType = {
    items: ItemType[]
    setMainTitle: (id: number) => void
}

const SelectBody:FC<UncontrolledSelectBodyPropsType> = (props) => {

    const allItems = props.items.map(item => {

        const onClickHandler = () => {
            props.setMainTitle(item.id)
        }

        return <li key={item.id} onClick={onClickHandler}>{item.title}</li>
        }
    )

    return (
        <ul>
            {allItems}
        </ul>
    )
};

export default UncontrolledSelect;