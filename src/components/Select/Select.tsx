import React, {FC, KeyboardEvent, useEffect, useState} from 'react';
import s from './Select.module.css'
import arrayDown from '../../assets/SelectAssets/Arrow-down.png'
import arrayUp from '../../assets/SelectAssets/Arrow-up.png'
import {CityType} from "../../stories/helpsExample.stories";

export type ItemType = {
    id: number
    title: string
}
export type SelectPropsType = {
    items: CityType[]
    selectedItem: CityType
    onChange: (itemId: number) => void
}
export type SelectBodyPropsType = {
    items: CityType[]
    setMainTitle: (id: number) => void
    selectedItem: CityType
    hoveredItem: CityType
    setHoveredItemHandler: (hoveredItem: CityType) => void
}


const SelectSecret: FC<SelectPropsType> = (props) => {

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [hoveredItem, setHoveredItem] = useState<CityType>(props.selectedItem)

    useEffect(() => {
        setHoveredItem(props.selectedItem)
    }, [props.selectedItem])

    const collapseItems = () => {
        setCollapsed(!collapsed)
    }
    const setMainTitle = (itemId: number) => {
        props.onChange(itemId)
        setCollapsed(true)
    }
    const setHoveredItemHandler = (hoveredItem: CityType) => {
        setHoveredItem(hoveredItem)
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp'){
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].cityId === hoveredItem.cityId) {
                    const nextElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (nextElement) {
                        props.onChange(nextElement.cityId)
                        return
                    }
                }
            }
        }
        if (e.key === 'Escape' || e.key === 'Enter'){
            setCollapsed(true)
        }
    }

    const arrowType = collapsed ? arrayDown : arrayUp

    return (
        <div className={s.selectContainer} onKeyUp={onKeyUpHandler} tabIndex={0}>
            <div className={s.selectItem}>
                <h3 onClick={collapseItems}>{props.selectedItem.title}</h3>
                <img src={arrowType} alt="arrow"/>
            </div>
            <div>
                {!collapsed && <SelectBody items={props.items}
                                           setMainTitle={setMainTitle}
                                           selectedItem={props.selectedItem}
                                           hoveredItem={hoveredItem}
                                           setHoveredItemHandler={setHoveredItemHandler}/>}
            </div>
        </div>
    );
};
export const Select = React.memo(SelectSecret)

const SelectBodySecret: FC<SelectBodyPropsType> = (props) => {

    return (
        <div className={s.items}>
            {props.items.map(item => {

                const onClickHandler = () => {
                    props.setMainTitle(item.cityId)
                }
                const onMouseEnterHandler = () => {
                    props.setHoveredItemHandler(item)
                }

                const itemClass = s.item + (props.hoveredItem.cityId === item.cityId ? ' ' + s.selectedItem : '')

                return (
                    <div
                        key={item.cityId}
                        onClick={onClickHandler}
                        className={itemClass}
                        onMouseEnter={onMouseEnterHandler}
                    >
                        {item.title}
                    </div>)
            })}
        </div>
    )
}
export const SelectBody = React.memo(SelectBodySecret)