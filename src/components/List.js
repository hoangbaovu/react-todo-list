import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import Item from './Item';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

function List(props) {
  let { items, search } = props;
  const { t } = useTranslation();
  let itemsOrigin = (items !== null) ? [...items] : [];

  // Search
  if (search.length > 0) {
    items = [];
    itemsOrigin.forEach(item => {
      if (item.name.toLowerCase().indexOf(search) !== -1) {
        return items.push(item);
      }
    });
  } else {
    items = itemsOrigin;
  }

  let renderItem = <tr><th className="text-center" colSpan={4}>{t('TASK_NO_LIST')}</th></tr>
  if (items.length > 0) {
    renderItem = items.map((item, index) => {
      return (
        <Item key={index} item={item} index={index} />
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

List.propTypes = {
  search: PropTypes.string
};

const mapStateToProps = state => {
  return {
    items: state.items,
    search: state.search
  }
}

export default connect(mapStateToProps, null)(List)