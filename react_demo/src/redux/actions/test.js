const test = (state = 0, action) => {
    switch(action.type) {
        case 'TEST_ADD':
            return state + action.number
        default:
            return state
    }
}

export default test