import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Todo from './pages/Todo';
import TopMenu from './components/TopMenu';
import ChooseLanguage from './components/ChooseLanguage';

function App() {
  return (
    <Router>
      <TopMenu />
      <Container className="my-5">
        <ChooseLanguage />
        <Route path="/" exact component={Home} />
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
      </Container>
    </Router>
  );
}

export default App;
