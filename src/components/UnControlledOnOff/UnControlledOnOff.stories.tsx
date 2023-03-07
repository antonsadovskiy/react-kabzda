import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./UnControlledOnOff";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
} ;

const callback = action('clicked')

export const UncontrolledOnMode = () => <UnControlledOnOff defaultOn={true} onChange={callback}/>
export const UncontrolledOffMode = () => <UnControlledOnOff defaultOn={false} onChange={callback}/>
export const UncontrolledOnOff = () => <UnControlledOnOff onChange={callback}/>