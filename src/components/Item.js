import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { actionDeleteItem, actionSelectedItem } from '../actions/index';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleEdit = item => {
    this.props.editItem(item);
  }

  handleDelete = id => {
    this.props.deleteItem(id);
  }

  handleComplete = id => {
    this.props.onClickComplete(id);
  }

  render() {
    const { item, index, t } = this.props;

    let className = 'task-name';
    if (item.complete) {
      className += ' complete'
    }

    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className={className} onClick={() => this.handleComplete(item)}>{item.name}</td>
        <td className="float-right">
          <Button onClick={() => this.handleEdit(item)} color="warning" className="mr-2">{t('EDIT')}</Button>
          <Button onClick={() => this.handleDelete(item.id)} color="danger">{t('DELETE')}</Button>
        </td>
      </tr>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired
  }),
  index: PropTypes.number,
  deleteItem: PropTypes.func,
  onClickComplete: PropTypes.func,
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editItem: (item) => {
      dispatch(actionSelectedItem(item));
    },
    deleteItem: (id) => {
      dispatch(actionDeleteItem(id));
    }
  }
}

export default compose(
  connect(null, mapDispatchToProps),
  withTranslation()
)(Item)