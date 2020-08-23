import React from 'react';
import './App.css';
import Row from "./Row"
import requests from './requests'

function App() {
  return (
    <div className="App">
      <Row title="Netflix Original" fetchURL={requests.fetchNetflixOrignials}/>
      <Row title="Trending" fetchURL={requests.fetchTrending}/>
    </div>
  );
}

export default App;
