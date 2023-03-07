import React, {FC} from 'react';
import s from './Select.module.css'
import arrayDown from '../../assets/SelectAssets/Arrow-down.png'
import arrayUp from '../../assets/SelectAssets/Arrow-up.png'

export type ItemType = {
    id: number
    title: string
}

export type SelectPropsType = {
    collapsed: boolean
    setCollapsed: (value: boolean) => void
    items: ItemType[]
    title: string
    onChange: (newTitle: string) => void
}

const Select:FC<SelectPropsType> = (props) => {

    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }
    const setMainTitle = (id: number) => {
        const newTitle = props.items.find(item => item.id === id)
        if (newTitle){
            props.onChange(newTitle.title)
            props.setCollapsed(true)
        }
    }

    const arrowType = props.collapsed? arrayDown: arrayUp

    return (
        <div className={s.selectContainer}>
            <div className={s.selectItem}>
                <h3 onClick={onClickHandler}>{props.title}</h3>
                <img src={arrowType} alt="arrow"/>
            </div>
            {!props.collapsed && <SelectBody items={props.items} setMainTitle={setMainTitle}/>}
        </div>
    );
};

export type SelectBodyPropsType = {
    items: ItemType[]
    setMainTitle: (id: number) => void
}

const SelectBody:FC<SelectBodyPropsType> = (props) => {

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
}

export default Select;