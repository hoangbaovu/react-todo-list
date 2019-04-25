import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { actionSubmitForm, actionUnSelectItem } from '../actions/index';

class FormTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task_id: '',
      task_name: '',
      task_complete: false
    }
  }

  componentWillMount() {
    this.updateItem(this.props.itemSelected);
  }

  componentWillReceiveProps(nextProps) {
    this.updateItem(nextProps.itemSelected);

    /**
     * nextProps là giá trị xem trước của prop mà component sắp được nhận để render.
     * Nếu component nhận props thì cập nhật lại item
     * https://viblo.asia/p/vong-doi-cua-component-trong-react-gGJ59XaJlX2
     * https://luubinhan.github.io/blog/2018-06-28-huong-dan-thay-component-will-receive-props/
     */
  }

  updateItem(item) {
    if (item !== null) {
      this.setState({
        task_id: item.id,
        task_name: item.name,
        task_complete: item.complete
      })
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    let { task_id, task_name, task_complete } = this.state
    let item = {
      id: task_id,
      name: task_name,
      complete: task_complete
    }
    this.props.formSubmit(item);
    event.preventDefault();
  }

  render() {
    const { t } = this.props;
    return (
      <Col md={6}>
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup style={{ width: '50%' }}>
            <Input
              value={this.state.task_name}
              onChange={this.handleChange}
              name="task_name"
              type="text"
              placeholder={t('TASK_SUBMIT_PLACEHOLDER')}
              style={{ width: '100%' }}
            />
          </FormGroup>
          <Button color="primary">{t('SUBMIT')}</Button>
        </Form>
      </Col>
    );
  }
}

FormTask.propTypes = {
  onClickSubmit: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    itemSelected: state.itemSelected
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    formSubmit: (item) => {
      dispatch(actionSubmitForm(item));
      dispatch(actionUnSelectItem());
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTranslation()
)(FormTask)