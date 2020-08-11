import React from 'react';
import './App.css';
import Repo from './components/Repo';
import SearchBar from './components/SearchBar';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Switch>
        <Route exact path="/"><h1>Search a username above to see repositories</h1></Route>
        <Route path='/repo' component={Repo}/>
      </Switch>
    </div>
  );
}

export default App;
