import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import OrderPage from './Components/OrderPage/OrderPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState('ㅅㅂ');
  const [coupon, setCoupon] = useState([]);

  const getUser = async () => {
    await axios
      .get('http://localhost:4000/users/1n2pgi02k5')
      .then(response => {
        setUser({
          address: `${response.data.address.city} ${response.data.address.state} ${response.data.address.address_line}`,
          additional_address: response.data.address.additional_address,
          phone_number: response.data.phone_number.replace(/\-/g, ''),
          additional_requests: [],
          payment_methods: [
            {
              id: response.data.payment_methods[0].id,
              vendor_name: response.data.payment_methods[0].vendor_name,
              card_number: response.data.payment_methods[0].card_number,
            },
            {
              id: response.data.payment_methods[1].id,
              vendor_name: response.data.payment_methods[1].vendor_name,
              card_number: response.data.payment_methods[1].card_number,
            },
          ],
          coupons: response.data.coupons,
          points: response.data.points,
        });
      })
      .catch(error => console.log(error));

    console.log(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 라우터 */}
          <Route path="/orderapp" element={<MainPage />} user={user} />
          {/* 주문 페이지 라우터 */}
          <Route
            path="/orderapp/order"
            element={
              <OrderPage user={user} coupon={coupon} setUser={setUser} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
