import React, { Fragment } from 'react';
import spinner from '../res/images/spinner.gif';

const Loading = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Loading;
