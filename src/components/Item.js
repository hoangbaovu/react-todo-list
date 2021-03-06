import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { actionDeleteItem, actionSelectedItem, actionClickItem } from '../actions/index';

function Item(props) {
  const { item, index } = props;
  const { t } = useTranslation();

  const handleEdit = item => {
    props.editItem(item);
  }

  const handleDelete = id => {
    props.deleteItem(id);
  }

  const handleComplete = item => {
    props.clickItem(item);
  }

  let className = 'task-name';
  if (item.complete) {
    className += ' complete'
  }

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className={className} onClick={() => handleComplete(item)}>{item.name}</td>
      <td className="float-right">
        <Button onClick={() => handleEdit(item)} color="warning" className="mr-2">{t('EDIT')}</Button>
        <Button onClick={() => handleDelete(item.id)} color="danger">{t('DELETE')}</Button>
      </td>
    </tr>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired
  }),
  index: PropTypes.number,
  editItem: PropTypes.func,
  deleteItem: PropTypes.func,
  clickItem: PropTypes.func,
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editItem: (item) => {
      dispatch(actionSelectedItem(item));
    },
    deleteItem: (id) => {
      dispatch(actionDeleteItem(id));
    },
    clickItem: (item) => {
      dispatch(actionClickItem(item));
    }
  }
}

export default connect(null, mapDispatchToProps)(Item)