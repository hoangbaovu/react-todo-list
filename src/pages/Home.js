import React, { useState, Fragment } from 'react';
import { Row, Col, Card, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { Trans, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as config from '../constants/Config';

function Home(props) {
  let [items] = useState([]);
  let { t } = props;
  items = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STORAGE)) || [];

  const countCompleteTask = boolean => {
    return items.filter(item => item.complete === boolean).length;
  }

  let renderCompleteTask = t('TASK_NO_LIST');
  if (items.length > 0) {
    renderCompleteTask = <Trans i18nKey="TASK_UNDONE" count={countCompleteTask(false)} />;
  }

  return (
    <Fragment>
      <Row>
        <Col md={4}>
          <Card body inverse color="danger">
            {renderCompleteTask}
          </Card>
        </Col>
        <Col md={4}>
          <Card body inverse color="success">
            <Trans i18nKey="TASK_DONE" count={countCompleteTask(true)} />
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

const mapStateToProps = state => {
  return {
    items: state.items,
  }
}

export default compose(
  connect(mapStateToProps, null),
  withTranslation()
)(Home)