import React from 'react'
import './App.css'
import { Link, Route } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import { ContentsContextProvider } from './contexts/ContentsContext'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img className="App-logo" alt="Trival App logo" src="/logo.png" />
        </Link>
        <ContentsContextProvider>
          <Route
            component={Home}
            path="/"
          />
          <Route
            component={SearchResults}
            path="/search/:keyword"
          />
        </ContentsContextProvider>
      </section>
    </div>
  );
}

export default App;
