import React,{memo} from 'react';
import {Route,Routes} from 'react-router-dom';
import Login from './pages/main/Login';

const App = memo(() => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
});

export default App;