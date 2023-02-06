import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    state: boolean
}

export function OnOff(props: OnOffPropsType) {

    return (
        <div className={s.container}>
            <div className={(props.state)? s.blockOn : s.block}>
                on
            </div>
            <div className={!(props.state)? s.blockOff : s.block}>
                off
            </div>
            <div className={(props.state)? s.lampOn : s.lampOff}>

            </div>
        </div>
    )
};

export default OnOff;