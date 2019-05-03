import React, { useState } from 'react';
import { Card } from 'reactstrap';
import { useTranslation } from 'react-i18next';

function CountCompleteTask(props) {
  let [items] = useState([]);
  items = props.items || [];
  const { t } = useTranslation();

  const countCompleteTask = boolean => {
    return items.filter(item => item.complete === boolean).length;
  }

  let count = countCompleteTask(false);
  let textComplete = 'TASK_UNDONE';

  if (props.count) {
    count = countCompleteTask(true);
    textComplete = 'TASK_DONE';
  }

  return (
    <Card body inverse color={props.color}>
      {t(`${textComplete}`, { count: `${count}` })}
    </Card>
  )
}

export default CountCompleteTask;