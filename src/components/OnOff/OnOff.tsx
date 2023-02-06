import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    state: boolean
}

type FilterType = 'on' | 'off'

export function OnOff(props: OnOffPropsType) {

    let [filter, setFilter] = useState<FilterType>('on')

    const changeFilter = (value: FilterType) => {
        setFilter(value)
    }

    let filteredState = props.state
    if (filter === 'on'){
        filteredState = true
    }
    if (filter === 'off'){
        filteredState = false
    }

    return (
        <div className={s.container}>
            <button className={(filteredState)? s.blockOn : s.block} onClick={ () => changeFilter('on') }>
                on
            </button>
            <button className={!(filteredState)? s.blockOff : s.block} onClick={ () => changeFilter('off') }>
                off
            </button>
            <div className={(filteredState)? `${s.lampOn} ${s.lamp}` : `${s.lampOff} ${s.lamp}`}>

            </div>
        </div>
    )
};

export default OnOff;