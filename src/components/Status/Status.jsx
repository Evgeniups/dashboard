import React from 'react';
import classes from './Status.module.scss';
import cn from 'classnames';

const Status = props => {
  const {active} = props;
  return (
    <div className={cn(classes.status, active ? classes.active : classes.inactive)}>
      {active ? 'Active' : 'Inactive'}
    </div>
  );
};

export default Status;
