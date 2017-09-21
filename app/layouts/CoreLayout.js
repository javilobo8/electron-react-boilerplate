import React from 'react';
import NavBar from 'components/NavBar';

const CoreLayout = ({children}) => (
  <div>
    <NavBar />
    {children}
  </div>
);

export default CoreLayout;