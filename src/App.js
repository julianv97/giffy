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
          <article className="w-full flex justify-center">
            <Link to="/" className="text-white cursor-pointer">
              <img src="/logo_giffy.png" alt="naa" className="cursor-pointer" />
            </Link>
          </article>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
        </section>
      </div>
    </GifsContextProvider>
  );
}

export default App;
