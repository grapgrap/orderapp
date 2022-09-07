import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading';
import axios from 'axios';
import MainPage from './Components/MainPage/MainPage';
import OrderPage from './Components/OrderPage/OrderPage';

function App() {
  const [user, setUser] = useState(null);
  const [coupon, setCoupon] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // 사용자 정보 가져오기
  const getUser = async () => {
    await axios
      .get('http://localhost:4000/users/1n2pgi02k5')
      .then(response => {
        console.log(response);
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
        console.log('데이터 받기 성공!');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const loading = () => {
    if (isLoading === false) {
      getUser();
      setLoading(true);
    }
  };

  useEffect(() => {
    loading();
    // user 데이터와 coupon 데이터가 존재한다면 로딩 끝.
  }, []);

  if (user) {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            {isLoading ? (
              <>
                {/* 메인 페이지 라우터 */}
                <Route path="/orderapp" element={<MainPage />} />
                {/* 주문 페이지 라우터 */}
                <Route
                  path="/orderapp/order"
                  element={<OrderPage user={user} setUser={setUser} />}
                />
              </>
            ) : (
              <>
                {/* 사용자 로딩 화면 */}
                <Route path="/orderapp" element={<Loading />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return null;
  }
}

export default App;
