import React from 'react'

import CountryWiseData from '../CountryWiseData'

import * as css from './App.css'

function App() {
  return (
    <div className={css.container}>
      <CountryWiseData />
      <div id="container"> Show Same Stats with details here (Total, deaths, new as compared to yesterday)</div>
      <div className={css.dataGrid}> Show a big data grid with all the countries</div>
    </div>
  )
}

export default App
