import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string;
}
type AccordionTitlePropsType = {
    title: string;
    // changeCollapsed: (value: boolean) => void
    // setCollapsed: (collapsed: boolean) => void
    onClick: () => void
    // collapsed: boolean
}

function UnControlledAccordionSecret(props: AccordionPropsType) {
    console.log("UnControlledAccordion rendering")

    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: 'TOGGLE-COLLAPSED'})} />
            { !state.collapsed && <AccordionBody/> }
        </div>
    )
}
export const UnControlledAccordion = React.memo(UnControlledAccordionSecret)


function AccordionTitleSecret(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    const onClickHandler = () => {
        props.onClick()
    }

    return <h3 onClick={onClickHandler}>{props.title}</h3>
}
export const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionBodySecret() {
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
export const AccordionBody = React.memo(AccordionBodySecret)
