import React, { useState } from 'react';
import ToasterViewport from './ToasterViewport';
import ToasterContext from  './ToasterContext';

let nextKey = 0;
function ToasterManager({ children }) {
  const [toasters, setToasters] = useState([]);
  console.log("rendering with toasters", [...toasters]);

  function dismiss(key, toasters) {
    const entry = toasters.find(entry => entry.key === key)
    if(toasters.indexOf(entry) === -1) { return };

    console.log("Dismissing key", key, [...toasters]);
    const newToasters = toasters.filter(entry => entry.key !== key);
    setToasters(newToasters);
  }

  function buildToaster(message, type) {
    const entry = {
      key: parseInt(nextKey),
      message,
      type
    }
    nextKey++;
    setToasters([entry, ...toasters]);
  }

  function success(message) {
    return buildToaster(message, 'success');
  }

  function info(message) {
    return buildToaster(message, 'info');
  }

  function error(message) {
    return buildToaster(message, 'error');
  }

  return (
    <ToasterContext.Provider value={{ toasters, success, info, error, dismiss }}>
      <ToasterViewport />
      { children }
    </ToasterContext.Provider>
  )
}

export default ToasterManager;
