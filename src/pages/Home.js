import React, { Component, Fragment } from 'react';
import { Row, Col, Card, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { Trans } from 'react-i18next';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    let items = JSON.parse(localStorage.getItem('task')) || [];
    this.setState({
      items: items
    });
  }

  render() {
    let { items } = this.state;
    let incompleteTask = items.filter(item => item.complete);
    let completeTask = items.filter(item => item.complete === false);

    return (
      <Fragment>
        <Row>
          <Col md={4}>
            <Card body inverse color="danger">
              <Trans i18nKey="TASK_UNDONE" count={completeTask.length} />
            </Card>
          </Col>
          <Col md={4}>
            <Card body inverse color="success">
              <Trans i18nKey="TASK_DONE" count={incompleteTask.length} />
            </Card>
          </Col>
          <Col md={4}>
            <Button color="primary" tag={Link} to="/todos/">
              <Trans i18nKey="TASK_ADD" />
            </Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Home;