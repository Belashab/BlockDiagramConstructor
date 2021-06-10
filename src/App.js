import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Options from './pages/Options';
import About from './pages/About';
import 'beautiful-react-diagrams/styles.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Options' component={Options} />
          <Route path='/About' component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;