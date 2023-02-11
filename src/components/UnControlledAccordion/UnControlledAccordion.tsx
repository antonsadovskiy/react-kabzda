import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UnControlledAccordion(props: AccordionPropsType) {
    console.log("UnControlledAccordion rendering")

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const toggleAccordion = (value: boolean) => {
        setCollapsed(value)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} toggleAccordion={toggleAccordion} collapsed={collapsed}/>
            { collapsed && <AccordionBody/> }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    toggleAccordion: (value: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    const onClickHandler = () => {
        props.toggleAccordion(!props.collapsed)
    }

    return <div onClick={onClickHandler}>{props.title}</div>
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

export default UnControlledAccordion;