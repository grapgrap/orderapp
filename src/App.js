import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderPage from './Components/OrderContent/OrderPage';
import MainPage from './Components/MainPage/MainPage';
import { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState({
    address: '강원도 태백시 해지개길 26',
    detail: '현대아파트 104동 301호',
    phoneNum: '01051906628',
  });

  const [option, setOption] = useState([
    {
      key: 0,
      value: 0,
      label: '벨은 누르지 말아주세요!',
    },
    {
      key: 1,
      value: 1,
      label: '문 앞에 놓아 주시고 연락 주세요.',
    },
    {
      key: 2,
      value: 2,
      label: '반찬은 안 주셔도 되요.',
    },
    {
      key: 6,
      value: 6,
      label: '직접 입력',
    },
  ]);

  console.log(option);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/orderapp" element={<MainPage />} />
          <Route
            path="/orderapp/order"
            element={
              <OrderPage
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                option={option}
                setOption={setOption}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
