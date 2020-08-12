const loadResult = (results) => ({
    type: 'LOAD_RESULT',
    payload:  results
});

export const getResult = searchTerm => {
    return async dispatch => {
        try{
            const data = await fetchGitRepo(searchTerm)
            dispatch(loadResult(data))
        } catch (err) {
            console.warn(err.message)
        }
    }
}

// Helpers
const fetchGitRepo = async searchTerm => {
    try {
        const resp = await fetch(`https://api.github.com/users/${searchTerm}/repos`)
        const data = await resp.json();
        return data
    } catch (err) {
        throw new Error(err.message)
    }
}