import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import birdData from "./data"
import Birds from "./Components/Birds"
import './App.css';

function App() {
  const [birds, setBirds] = useState(birdData);

  return (
    <div className="App">
      <header>
        <h1 className="site-header">Audubon Society</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/:birds">Birds</Link>
      </nav>
      <main>
        <h2 className="home-header">Birds</h2>
        <div classname="home-birds">
          {
            birds.map((bird) => (
              <div>
                <img src={bird.image}/>
              </div>
            ))
          }
        </div>
        <Route exact path="/:birds">
          <Birds birds={birds}/>
        </Route>
      </main>
    </div>
  );
}

export default App;

// {
//   name: "Acadian Flycatcher",
//   genus: "Empidonax virescens",
//   conservationStatus:
//     "Would be vulnerable to loss of habitat, but no significant decline noted so far. In some regions, Brown-headed Cowbirds often lay eggs in nests of this species.",
//   image:
//     "https://www.audubon.org/sites/default/files/styles/bird_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy",
//   homepage: "https://www.audubon.org/field-guide/bird/acadian-flycatcher"
// },