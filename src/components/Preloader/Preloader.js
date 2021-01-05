import './Preloader.css';
// import React, { useCallback, useState, useEffect } from 'react';

// import {
//   Redirect, Route, Switch, useHistory,
// } from 'react-router-dom';

function Preloader() {
  return (
    <div className="preloader">
      <i className="preloader__circle"></i>
      <p className="preloader__text">Идет поиск новостей...</p>
    </div>
  );
}

export default Preloader;
