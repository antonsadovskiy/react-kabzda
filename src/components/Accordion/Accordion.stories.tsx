import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion , DataType} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

const onClickHandler = (id: number) => {
    action(`item with index ${id} was clicked`)
}

export const CollapsedAccordion = () => {

    const data: Array<DataType> = [
        {id: 1, name: "Igor"},
        {id: 2, name: "Vlad"},
        {id: 3, name: "Nastya"},
    ]

    return (<Accordion titleValue={'Menu'}
                       collapsed={true}
                       changeCollapsed={action('clicked')}
                       data={data}
                       onClick={onClickHandler}/>)
}
export const UncollapsedAccordion = () => {

    const data: Array<DataType> = [
        {id: 1, name: "Elena"},
        {id: 2, name: "Katya"},
        {id: 3, name: "Vika"},
    ]

    return <Accordion titleValue={'Menu'}
                      collapsed={false}
                      changeCollapsed={action('clicked')}
                      data={data}
                      onClick={onClickHandler}/>
}
export const ChangingMode = () => {


    const data = [
        {id: 1, name: "Anton"},
        {id: 2, name: "Makar"},
        {id: 3, name: "Diana"},
        {id: 4, name: "Dima"},
    ]

    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion titleValue={'Menu'}
                      collapsed={collapsed}
                      changeCollapsed={() => setCollapsed(!collapsed)}
                      data={data}
                      onClick={onClickHandler}/>
}
