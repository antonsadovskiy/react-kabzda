export type ActionType = {
    type: 'TOGGLE-COLLAPSED'
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error('bad action')
    }
}