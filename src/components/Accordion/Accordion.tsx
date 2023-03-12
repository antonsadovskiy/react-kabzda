import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    changeCollapsed: () => void
    data: Array<DataType>
    onClick: (id: number) => void
}
type AccordionTitlePropsType = {
    title: string;
    changeCollapsed: () => void
}
export type DataType = {
    id: number
    name: string
}
type AccordionBodyPropsType = {
    data: Array<DataType>
    onClick: (id: number) => void
}


function AccordionSecret(props: AccordionPropsType) {
    console.log("UnControlledAccordion rendering")

    return (
        <div>
            <AccordionTitle title={props.titleValue} changeCollapsed={props.changeCollapsed}/>
            {!props.collapsed && <AccordionBody data={props.data} onClick={props.onClick}/>}
        </div>
    )
}
export const Accordion = React.memo(AccordionSecret)


function AccordionTitleSecret(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    const onClickHandler = () => {
        props.changeCollapsed()
    }

    return <h3 onClick={onClickHandler}>{props.title}</h3>
}
export const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionBodySecret(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")

    return (
        <div>
            <ul>
                {props.data.map(item =>
                    <li key={item.id} onClick={() => props.onClick(item.id)}>{item.name}</li>
                )}
            </ul>
        </div>
    )
}
export const AccordionBody = React.memo(AccordionBodySecret)