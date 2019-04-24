import React, { Component, Fragment } from 'react';
import { Row } from 'reactstrap';
import FormTask from './../components/FormTask';
import List from './../components/List';
import Search from './../components/Search';

const uuidv4 = require('uuid/v4');

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      strSearch: '',
      itemSelected: null,
    };
  }

  handleEdit = item => {
    this.setState({
      itemSelected: item,
    });
  }

  handleComplete = item => {
    let { items } = this.state;
    const complete = item.complete;
    const index = items.indexOf(item);
    items = [
      ...items.slice(0, index),
      {
        ...item,
        complete: !complete
      },
      ...items.slice(index + 1)
    ]
    this.setState({
      items: items
    });

    localStorage.setItem('task', JSON.stringify(items));
  }

  handleSubmit = item => {
    let { items } = this.state;

    if (item.id !== '') { //edit
      items.forEach((value, key) => {
        if (value.id === item.id) {
          items[key].name = item.name;
        }
      });
    } else { // add
      items.push({
        id: uuidv4(),
        name: item.name,
        complete: item.complete
      });
    }

    this.setState({
      items: items
    })

    localStorage.setItem('task', JSON.stringify(items));
  }
  render() {
    let { itemSelected } = this.state;
    return (
      <Fragment>
        <Row>
          <FormTask
            itemSelected={itemSelected}
            onClickSubmit={this.handleSubmit}
          />
          <Search />
        </Row>
        <List
          onClickEdit={this.handleEdit}
          onClickComplete={this.handleComplete}
        />
      </Fragment>
    );
  }
}

export default Todo;