import React, { Fragment} from 'react';
import Loader from './Loader';

const Button = ({ title, action, variant, onClick, loading }) => {
  return (
    <Fragment>
       {!loading ?<button className={`btn btn-${variant}`} onClick={onClick}>
      {title}
      </button>
    : <Loader loading />
    }
    </Fragment>
    
   
  );
};

export default Button;