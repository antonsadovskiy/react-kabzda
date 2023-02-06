import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    state: boolean
}

export function OnOff(props: OnOffPropsType) {

    return (
        <div className={s.container}>
            <div className={s.blockOn} style={{background: (props.state)? 'green' : 'white'}}>
                on
            </div>
            <div className={s.blockOff} style={{background: (!props.state)? 'red' : 'white'}}>
                off
            </div>
            <div className={s.lamp} style={{background: (props.state)? 'green' : 'red'}}>

            </div>
        </div>
    )
};

export default OnOff;