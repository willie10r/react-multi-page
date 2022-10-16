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
import NavBar from './NavBar';

const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
     <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Welcome></Welcome>}></Route>
        <Route path='/Main' element={<Main></Main>}></Route>
        <Route path='/Sign' element={<Sign></Sign>}></Route>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
