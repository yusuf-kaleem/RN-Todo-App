let initialState = {
    tasks: []
}

function itemReducer(state = initialState, { type, payload }) {
    switch (type) {
        case "ADD_TASK":
            return { ...state, tasks: state.tasks.concat(payload)}

        case "REMOVE_TASK":
            return { ...state, checkout_Items: state.tasks.splice(payload, 1)}
        default:
            return state;
    }
}

export { itemReducer }