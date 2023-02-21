import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
} ;

export const OnMode = () => <OnOff filter={true} changeFilter={action('clicked')}/>
export const OffMode = () => <OnOff filter={false} changeFilter={action('clicked')}/>
export const ChangingMode = () => {
    const [filter, setFilter] = useState<boolean>(false)

    return <OnOff filter={filter} changeFilter={setFilter}/>
}


