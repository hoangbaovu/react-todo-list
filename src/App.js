import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from './pages/Home';
import About from './pages/About';
import Todo from './pages/Todo';
import TopMenu from './components/TopMenu';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <TopMenu />
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <div className="float-right">
              <Button className="mx-2" onClick={() => changeLanguage("vn")}>vn</Button>
              <Button onClick={() => changeLanguage("en")}>en</Button>
            </div>
          </Col>
        </Row>
        <Route path="/" exact component={Home} />
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
      </Container>
    </Router>
  );
}

export default App;
