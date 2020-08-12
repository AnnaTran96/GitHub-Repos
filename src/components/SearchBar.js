import React from 'react';
import { connect } from 'react-redux'
import { getResult } from '../actions/Action'
import './styles/searchStyle.css'

class SearchBar extends React.Component {
    state = {
        userName: "",
    }

    handleInput = e => {
        this.setState({ userName: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        this.props.getResult(this.state.userName);
    }

    render() {

        return (
            <>
                <form onSubmit={this.handleSubmit} className="form">
                    <input type="text" onChange={this.handleInput} placeholder="Find a repository..." className="searchBar"></input>
                    <input type="submit" value="Search" className="search"></input>
                </form>
            </>
        )
    }
}

export default connect(null, { getResult })(SearchBar);