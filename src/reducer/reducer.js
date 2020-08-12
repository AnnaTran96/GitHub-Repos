const initState = { userName: "", results: "" };

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOAD_RESULT':
            return { ...state, results:  action.payload }
        default:
            return state
    }
}

export default searchReducer;