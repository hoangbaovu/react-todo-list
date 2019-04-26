import React, { useState, Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { Trans, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as config from '../constants/Config';
import CountCompleteTask from '../components/dashboard/CountCompleteTask';

function Home() {
  let [items] = useState([]);
  items = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STORAGE)) || [];

  return (
    <Fragment>
      <Row>
        <Col md={4}>
          <CountCompleteTask items={items} color="danger" count={false} />
        </Col>
        <Col md={4}>
          <CountCompleteTask items={items} color="success" count={true} />
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

const mapStateToProps = state => {
  return {
    items: state.items,
  }
}

export default compose(
  connect(mapStateToProps, null),
  withTranslation()
)(Home)