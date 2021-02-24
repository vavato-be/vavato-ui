import React, { useContext } from 'react';

const EnvContext = React.createContext({});

export const useEnv = (key) => useContext(EnvContext)[`REACT_APP_${key}`];
export default EnvContext;
