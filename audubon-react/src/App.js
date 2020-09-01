import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import birdData from "./data"
import Birds from "./Components/Birds"
import './App.css';

function App() {
  const [birds, setBirds] = useState(birdData);

 
  return (
    <div className="App">
      <header>
        <Link to="/birds" className="site-header">Audubon Society</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/birds">
            <div className="home-container">
              <h2 className="home-header">Birds</h2>
              <div className="home-birds-container">
                {birds.map((bird, index) => (
                  <div className="home-birds">
                    <Link to={`/birds/${bird.name}`} > 
                    <img src={bird.image} key={index} /> 
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Route>
          <Route path="/birds/:name">
            <Birds birds={birds}/>
          </Route>          
        </Switch>

      </main>
    </div>
  );
}

export default App;