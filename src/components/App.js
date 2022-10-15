import React from 'react';
import { ReactDOM } from 'react';
import { 
  Route, 
  BrowserRouter,
  Routes } from 'react-router-dom';

import '../scss/styles.scss';


//components
import Welcome from './Welcome';
import Main from './Main';
import Sign from './Sign';

const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      <Welcome path='/Welcome'></Welcome>
      <Routes>
        <Route path='/Main' element={<Main></Main>}></Route>
        <Route path='/Sign' element={<Sign></Sign>}></Route>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
