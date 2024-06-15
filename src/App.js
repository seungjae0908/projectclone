import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Choose from './components/Choose';
import Carhome from './components/Carhome';
import Carevent from './components/CarHeader/Carevent';
import Carnoti from './components/CarHeader/Carnoti';
import Carres from './components/CarHeader/Carres';
import Mypage from './components/CarHeader/Mypage';
import Carreview from './components/CarHeader/Carreview';
import Error from './components/Error';
import Loginpage from './components/Loginpage';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Loginpage />} />
        <Route path='/car/home' element={<Carhome />} />
        <Route path='/choose' element={<Choose />} />

        <Route path='/car/res' element={<Carres />} />
        <Route path='/car/noti' element={<Carnoti />} />
        <Route path='/car/event' element={<Carevent />} />
        <Route path='/car/review' element={<Carreview />} />
        <Route path='/mypage' element={<Mypage />} />

        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
