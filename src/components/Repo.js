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
                <a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.name}</a>
                <ul>
                    {/* <span className="circle"></span> */}
                    <li>{item.language}</li>
                    <i className="fa fa-code-fork" aria-hidden="true"><li>{item.forks}</li></i>
                </ul>
            </div>
        ))
    }
    
    renderAvatar = results => {
        return(
            <div className="avatar">
                <img src={results[0].owner.avatar_url} className="avataricon" alt="Avatar"></img>
                <h1 className="gitName">{results[0].owner.login}</h1>
                <a href={results[0].owner.html_url} className="profile" target="_blank" rel="noopener noreferrer">View Profile</a>
                <br></br>
                <i class="fa fa-star-o" aria-hidden="true"><span>{results[0].stargazers_count}</span></i>
                <p className="repos">Repositories ({this.props.results.length})</p>
            </div>
        )
    }

    
    render() {
       
        return(
            <>
                <div className="title">
                    <i className="fa fa-github" aria-hidden="true"></i>
                    <h1 >GitHub Repositories</h1>
                </div>
                <SearchBar getResult={ this.getResult } />
                { this.props.results ? this.renderAvatar(this.props.results) : "" }
                { this.props.results ? this.renderResults(this.props.results) : <p className="intro">Search a user's repositories above</p> }
            </>
        )
    }
}

const mSTP = state => ({
    userName: state.userName,
    results: state.results
})


export default connect(mSTP, { getResult })(Repo);