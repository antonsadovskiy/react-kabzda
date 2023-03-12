import {reducer, StateType} from "./reducer";

test('value should be true',() => {
    // data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    //expect
    expect(newState.collapsed).toBe(true)
})

test('value should be false',() => {
    // data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    //expect
    expect(newState.collapsed).toBe(false)
})