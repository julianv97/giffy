import React from "react";

import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";

import { GifsContextProvider } from "./context/GifsContext";
import { Link, Route } from "wouter";

function App() {
  return (
    <GifsContextProvider>
      <div className="bg-purple-back h-full min-h-screen font-manrope">
        <section className="bg-purple-back  h-full min-h-screen">
          <Link to="/" className="text-white"> Inicio </Link>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
        </section>
      </div>
    </GifsContextProvider>
  );
}

export default App;
