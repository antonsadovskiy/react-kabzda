import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./UnControlledOnOff";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
} ;

export const UncontrolledOnOff = () => {

    const [filter, setFilter] = useState<boolean>(false)
    return <UnControlledOnOff onChange={() => setFilter(!filter)}/>
}