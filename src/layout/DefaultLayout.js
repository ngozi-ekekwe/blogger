import React from 'react';

const DefaultLayout = ({children}) => {
  return (
    <div>
      <p>Default Layout</p>
      {children}
    </div>
  );
};

export default DefaultLayout;