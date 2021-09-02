import React, { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";

import { Link, Route } from "wouter";

function App() {
  const [keyword, setKeyword] = useState("rick");
  return (
    <div>
      <section>
        <Link to="/gif/rick">Gifs de Rick</Link>
        <Link to="/gif/morty">Gifs de Morty</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
