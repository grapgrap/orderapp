import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderPage from './Components/OrderPage/OrderPage';
import MainPage from './Components/MainPage/MainPage';
import { useState } from 'react';
// import axios from 'axios';

function App() {
  const [user, setUser] = useState({
    info: {
      address: '강원도 태백시 해지개길 26',
      additional_address: '104동 301호',
      phone_number: '010-5190-6628',
    },
    requestList: [],
    payment_methods: [
      {
        id: '1km2gm3',
        vendor_name: '온새카드',
        card_number: '1968109202950192',
      },

      {
        id: '1gj29t1',
        vendor_name: '샘송오일카드',
        card_number: '1959196220129591',
      },
    ],
    discount: {
      coupon: [
        {
          coupon_id: '1jgj391j3ig',
          coupon_type: 'fixed',
          coupon_name: '동해물과백두산이마르고닳도록쓸수있는백점만점쿠폰',
          coupon_value: 100000,
        },
        {
          coupon_id: '1utn2k52k1',
          coupon_type: 'rated',
          coupon_name: '이걸 왜주나 싶은 쿠폰',
          coupon_value: 0.3,
        },
        {
          coupon_id: '996k3j2kd',
          coupon_type: 'rated',
          coupon_name: '옛다 쿠폰',
          coupon_value: 10,
        },
      ],
      points: 1000000000,
    },
  });

  const [menu, setMenu] = useState('');

  // useEffect(() => {
  //   getUser();
  // }, []);

  // 이 부분에서 useMemo와 useCallback을 활용해보자
  // const getUser = async () => {
  //   await axios
  //     .get('http://localhost:4000/users/1n2pgi02k5')
  //     .then(res => {
  //       console.log(res.data);
  //       setUser({
  //         info: {
  //           address: `${res.data.address.city} ${res.data.address.state} ${res.data.address.address_line}`,
  //           additional_address: res.data.address.additional_address,
  //           phone_number: res.data.phone_number.replace(/\-/g, ''),
  //         },
  //       });
  //     })
  //     .catch(error => console.log(error));
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/orderapp"
            element={<MainPage menu={menu} setMenu={setMenu} />}
          />
          <Route
            path="/orderapp/order"
            element={<OrderPage user={user} menu={menu} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
