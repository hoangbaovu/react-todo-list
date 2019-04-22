import React, { Component } from 'react';
import { Col, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      strSearch: ''
    }
  }

  handleSearch = () => {
    this.props.onClickSearch(this.state.strSearch);
  }

  handleClear = () => {
    this.setState({
      strSearch: ''
    });
    this.props.onClickSearch('');
  }

  handleChange = event => {
    this.setState({
      strSearch: event.target.value
    });
  }

  render() {
    const { t } = this.props;
    return (
      <Col md={6}>
        <div className="d-flex">
          <Input
            value={this.state.strSearch}
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

export default withTranslation()(Search);