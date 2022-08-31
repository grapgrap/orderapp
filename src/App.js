import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderPage from './Components/OrderPage/OrderPage';
import MainPage from './Components/MainPage/MainPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState({
    info: {
      address: '강원도 태백시 해지개길 26',
      additional_address: '104동 301호',
      phone_number: '010-5190-6628',
    },
  });

  // useEffect(() => {
  //   getUser();
  // }, []);

  // 이 부분에서 useMemo와 useCallback을 활용해보자
  const getUser = async () => {
    await axios
      .get('http://localhost:4000/users/1n2pgi02k5')
      .then(res => {
        console.log(res.data);
        setUser({
          info: {
            address: `${res.data.address.city} ${res.data.address.state} ${res.data.address.address_line}`,
            additional_address: res.data.address.additional_address,
            phone_number: res.data.phone_number.replace(/\-/g, ''),
          },
        });
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/orderapp" element={<MainPage />} />
          <Route
            path="/orderapp/order"
            element={<OrderPage user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
