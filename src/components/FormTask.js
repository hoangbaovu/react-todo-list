import React, { useState, useEffect } from 'react';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { actionSubmitForm, actionUnSelectItem } from '../actions/index';

function FormTask(props) {
  const [taskId, setTaskId] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskComplete, setTaskComplete] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    updateItem(props.itemSelected)
  }, [props.itemSelected]);

  function updateItem(item) {
    setTaskId(item.id);
    setTaskName(item.name);
    setTaskComplete(item.complete);
  }

  function handleSubmit(event) {
    let item = {
      id: taskId,
      name: taskName,
      complete: taskComplete
    }
    props.formSubmit(item);
    event.preventDefault();
  }

  return (
    <Col md={6}>
      <Form inline onSubmit={handleSubmit}>
        <FormGroup style={{ width: '50%' }}>
          <Input
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
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

FormTask.propTypes = {
  formSubmit: PropTypes.func,
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

export default connect(mapStateToProps, mapDispatchToProps)(FormTask)