import React from 'react';
import { Lemon } from './Lemon';

const Loader = ({ loading }) => (
  <div className={`${loading ? 'show' : null}  absolute loading--area align-items-center flex justify-content-center`}>
    <div className="loading--bottle">
      <Lemon />
    </div>
  </div>
);

export default Loader;
