import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import birdData from "./data"
import Birds from "./Components/Birds"
import './App.css';
import CreateBirds from './Components/CreateBirds';

function App() {
  const [birds, setBirds] = useState(birdData);
  // const [fetchBirds, setFetchBirds] = useState(false);

 
  return (
    <div className="App">
      <header>
        <Link to="/" className="site-header">Audubon Society</Link>
        <Link to="/new"className="new-add-bird">Add a new bird</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <div className="home-container">
              <h2 className="home-header">Birds</h2>
              <div className="home-birds-container">
                {birds.map((bird, index) => (
                  <div className="home-birds">
                    <Link to={`/birds/${bird.name}`} > 
                    <img className="home-img" src={bird.image} key={index} /> 
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Route>
          <Route path="/birds/:name">
            <Birds birds={birds}/>
          </Route> 
          <Route exact path="/new">
            <CreateBirds setBirds={setBirds}/>
          </Route>
        </Switch>

      </main>
    </div>
  );
}

export default App;