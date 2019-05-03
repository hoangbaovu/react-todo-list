import React, { Fragment } from 'react';
import { Row } from 'reactstrap';
import FormTask from './../components/FormTask';
import List from './../components/List';
import Search from './../components/Search';

function Todo() {
  return (
    <Fragment>
      <Row>
        <FormTask />
        <Search />
      </Row>
      <List />
    </Fragment>
  );
}

export default Todo;