import React, { useState } from 'react';
import { Col, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { actionSearch } from './../actions/index';
import { connect } from 'react-redux';
import { compose } from 'redux';

function Search(props) {
  let [search, setSearch] = useState("");

  function handleSearch() {
    props.goSearch(search);
  }

  function handleClear() {
    setSearch("")
    props.goSearch('');
  }

  const { t } = props;
  return (
    <Col md={6}>
      <div className="d-flex">
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          placeholder={t('SEARCH_PLACEHOLDER')}
        />
        <Button
          onClick={handleSearch}
          color="info"
          style={{ width: '150px', marginRight: '.5rem' }}>
          {t('SEARCH')}
        </Button>
        <Button onClick={handleClear} color="danger">
          {t('DELETE')}
        </Button>
      </div>
    </Col>
  );
}

Search.propTypes = {
  goSearch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goSearch: (search) => {
      dispatch(actionSearch(search));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTranslation()
)(Search)