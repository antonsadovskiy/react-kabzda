import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    changeCollapsed: () => void
}

function Accordion(props: AccordionPropsType) {
    console.log("UnControlledAccordion rendering")

    return (
        <div>
            <AccordionTitle title={props.titleValue} changeCollapsed={props.changeCollapsed}/>
            { !props.collapsed && <AccordionBody/> }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
    changeCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    const onClickHandler = () => {
        props.changeCollapsed()
    }

    return <h3 onClick={onClickHandler}>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion;