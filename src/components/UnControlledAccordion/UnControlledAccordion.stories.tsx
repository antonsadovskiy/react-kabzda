import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnControlledAccordion} from "./UnControlledAccordion";

export default {
    title: 'UnControlled Accordion',
    component: UnControlledAccordion,
} ;

export const UncontrolledAccordion = () => {
    return <UnControlledAccordion titleValue={"Menu"} />
}