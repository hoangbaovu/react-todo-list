import React, { Component } from 'react';
import { Col, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { actionSearch } from './../actions/index';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  handleSearch = () => {
    this.props.goSearch(this.state.search);
  }

  handleClear = () => {
    this.setState({
      search: ''
    });
    this.props.goSearch('');
  }

  handleChange = event => {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    const { t } = this.props;
    return (
      <Col md={6}>
        <div className="d-flex">
          <Input
            value={this.state.search}
            onChange={this.handleChange}
            type="text"
            placeholder={t('SEARCH_PLACEHOLDER')}
          />
          <Button
            onClick={this.handleSearch}
            color="info"
            style={{ width: '150px', marginRight: '.5rem' }}>
            {t('SEARCH')}
          </Button>
          <Button onClick={this.handleClear} color="danger">
            {t('DELETE')}
          </Button>
        </div>
      </Col>
    );
  }
}

Search.propTypes = {
  onClickSearch: PropTypes.func
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