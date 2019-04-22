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

  componentWillMount() {
    console.log('componentWillMount - 1');
    let items = JSON.parse(localStorage.getItem('task')) || [];
    this.setState({
      items: items
    });
    /**
     * Được gọi một lần trên cả client và server trước khi render diễn ra.
     * Không thực thi các hàm xử lý, tính toán DOM lúc này
     */
  }

  // componentDidMount() {
  //   console.log('componentDidMount - 3');

  //   /**
  //     Hàm này chỉ thực hiện 1 lần duy nhất
  //     Hữu dụng khi bạn làm việc với Map, bởi vì map chỉ render được khi có node (id) trong DOM
  //     Nơi thực hiện Fetch API?
  //     Dùng kết hợp với các Javascript Framework khác
  //     và bất kỳ hàm làm hoãn sự thực thi như SetTimeOut hoặc SetInterval. 
  //   */
  // }

  // componentWillReceiveProps(newProps) {
  //   console.log('componentWillReceiveProps - 4', newProps);

  //   /**
  //    * Thực thi liên tục ngay khi các Props có sự thay đổi và trước khi một render khác được gọi.
  //    * Thường sử dụng để thay đổi trạng thái (state) của component phụ thuộc props
  //    */
  // }

  handleSearch = value => {
    this.setState({
      strSearch: value
    });
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

  handleDelete = id => {
    let { items } = this.state;

    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items.splice(i, 1);
      }
    }

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
    let itemsOrigin = (this.state.items !== null) ? [...this.state.items] : [];
    let items = [];
    let { strSearch, itemSelected } = this.state;

    // Search
    // Items: abc, def, ghj
    // input strSearch : ab
    // output: abc

    if (strSearch.length > 0) {
      itemsOrigin.forEach(item => {
        if (item.name.toLowerCase().indexOf(strSearch) !== -1) {
          items.push(item);
        }
      });
    } else {
      items = itemsOrigin;
    }
    return (
      <Fragment>
        <Row>
          <FormTask
            itemSelected={itemSelected}
            onClickSubmit={this.handleSubmit}
          />
          <Search
            onClickSearch={this.handleSearch}
            strSearch={this.props.strSearch}
          />
        </Row>
        <List
          onClickEdit={this.handleEdit}
          onClickDelete={this.handleDelete}
          onClickComplete={this.handleComplete}
          items={items}
        />
      </Fragment>
    );
  }
}

export default Todo;