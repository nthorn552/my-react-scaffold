import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContainer from './components/AppContainer';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
