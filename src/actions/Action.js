const loadResult = ({ results }) => ({
    type: 'LOAD_RESULT',
    payload: { results } 
});

export const getResult = userInput => {
    return async dispatch => {
        
        try{
            const res = await fetch(`https://api.github.com/user/${userInput}/repos`)
            const data = await res.json();
            dispatch(loadResult(data))
            return data;
        } catch (err) {
            console.warn(err)
        }
    }
}