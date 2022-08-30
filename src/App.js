import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderPage from './Components/OrderPage/OrderPage';
import MainPage from './Components/MainPage/MainPage';
import { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState({
    address: '강원도 태백시 해지개길 26',
    detail: '현대아파트 104동 301호',
    phoneNum: '01051906628',
  });

  // option의 경우 하드 코딩이 되어 있으므로 state 말고 그냥 만들어서
  // 추가하는 식으로 해봐야 겠다.

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/orderapp" element={<MainPage />} />
          <Route
            path="/orderapp/order"
            element={
              <OrderPage userInfo={userInfo} setUserInfo={setUserInfo} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
