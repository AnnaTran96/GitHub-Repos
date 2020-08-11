import React from 'react';
import { Redirect } from 'react-router-dom';

class SearchBar extends React.Component {
    state = {
        userInput: "",
        redirect: false
    }

    handleInput = e => {
        this.setState({ userInput: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        fetch(`https://api.github.com/user/${e}/repos`)
            .then(() => this.setState({redirect: true}))
            .then( r => r.json())
    }

    render() {

        const redirect = this.state.redirect
        if(redirect) {
            return(
                    <Redirect to={{
                        pathname: '/repo',
                        state: ({userInput: this.state.userInput})
                    }}/>
                )      
        }
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInput}></input>
                </form>

                <span>{this.state.userInput}</span>
            </>
        )
    }
}

export default SearchBar;