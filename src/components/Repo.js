import React from 'react';
// import Action from '../actions'

class Repo extends React.Component {
   
    // componentDidMount() {
    //     fetch( API )
    // }

       
    render() {
        return(
            <>
                <h1>Github Repositories</h1>
                
                <p>{this.props.userInput}</p>
                {/* <span>{this.state.results.url}</span> */}
            </>
        )
    }
}


export default Repo;