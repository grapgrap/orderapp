import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import OrderPage from './Components/OrderPage/OrderPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState('');

  const getUser = async () => {
    await axios
      .get('http://localhost:4000/users/1n2pgi02k5')
      .then(res => {
        console.log(res);
        setUser({
          address: `${res.data.address.city} ${res.data.address.state} ${res.data.address.address_line}`,
          additional_address: res.data.address.additional_address,
          phone_number: res.data.phone_number.replace(/\-/g, ''),
          additional_requests: [],
          payment_methods: [
            {
              id: res.data.payment_methods[0].id,
              vendor_name: res.data.payment_methods[0].vendor_name,
              card_number: res.data.payment_methods[0].card_number,
            },
            {
              id: res.data.payment_methods[1].id,
              vendor_name: res.data.payment_methods[1].vendor_name,
              card_number: res.data.payment_methods[1].card_number,
            },
          ],
        });
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 라우터 */}
          <Route path="/orderapp" element={<MainPage />} />
          {/* 주문 페이지 라우터 */}
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
