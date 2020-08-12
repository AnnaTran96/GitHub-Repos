import React from 'react';
import { connect } from 'react-redux';
import { getResult } from '../actions/Action';
import SearchBar from './SearchBar';
import './styles/style.css'

class Repo extends React.Component {

    getResult = searchTerm => this.props.getResult(searchTerm)

    renderResults = (results) => {
        return results.map((item, index) => (
            <div key={ index } className="results">
                <a href={item.html_url} target="_blank">{item.name}</a>
                <ul>
                    <li>Open Issues: {item.open_issues_count}</li>
                    <li>Stargazers: {item.stargazers_count}</li>
                    <li>Forks: {item.forks}</li>
                </ul>
            </div>
        ))
    }
    
    renderAvatar = results => {
        return(
            <div className="avatar">
                <h1>{results[0].owner.login}</h1>
                <img src={results[0].owner.avatar_url} className="avataricon"></img>
            </div>
        )
    }

    
    render() {
       
        return(
            <>
                <h1>Github Repositories</h1>
                <SearchBar getResult={ this.getResult } />
                { this.props.results ? this.renderAvatar(this.props.results) : "" }
                { this.props.results ? this.renderResults(this.props.results) : <p>Search a user's repositories above</p> }
            </>
        )
    }
}

const mSTP = state => ({
    userName: state.userName,
    results: state.results
})


export default connect(mSTP, { getResult })(Repo);