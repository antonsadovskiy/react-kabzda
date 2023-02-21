import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
} ;

export const CollapsedAccordion = () => <Accordion titleValue={'Menu'}
                                                   collapsed={true}
                                                   changeCollapsed={action('clicked')}/>
export const UncollapsedAccordion = () => <Accordion titleValue={'Menu'}
                                                     collapsed={false}
                                                     changeCollapsed={action('clicked')}/>
export const ChangingMode = () => {

    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion titleValue={'Menu'} collapsed={collapsed} changeCollapsed={()=>setCollapsed(!collapsed)}/>
}
