import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}

export function UnControlledAccordion(props: AccordionPropsType) {
    console.log("UnControlledAccordion rendering")

    const [collapsed, setCollapsed] = useState<boolean>(false)

    // const changeCollapsed = (value: boolean) => {
    //     setCollapsed(value)
    // }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)} />
            { !collapsed && <AccordionBody/> }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
    // changeCollapsed: (value: boolean) => void
    // setCollapsed: (collapsed: boolean) => void
    onClick: () => void
    // collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    const onClickHandler = () => {
        props.onClick()
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
