import React, { Component } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import Item from './Item';
import { withTranslation } from 'react-i18next';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { items, t } = this.props;

    let renderItem = <tr><th className="text-center" colspan={4}>{t('TASK_NO_LIST')}</th></tr>
    if (items.length > 0) {
      renderItem = items.map((item, index) => {
        return (
          <Item
            onClickEdit={this.props.onClickEdit}
            onClickDelete={this.props.onClickDelete}
            onClickComplete={this.props.onClickComplete}
            key={index} item={item} index={index}
          />
        );
      });
    };

    return (
      <Table striped hover>
        <thead>
          <tr>
            <th style={{ width: '5%' }} className="text-center">#</th>
            <th>{t('TASK_LIST')}</th>
            <th style={{ width: '40%' }}></th>
          </tr>
        </thead>
        <tbody>
          {renderItem}
        </tbody>
      </Table>
    );
  }
}

List.propTypes = {
  items: PropTypes.array
};

export default withTranslation()(List);