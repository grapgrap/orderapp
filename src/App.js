import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading';
import axios from 'axios';
import MainPage from './Components/MainPage/MainPage';

function App() {
  const [user, setUser] = useState(null);
  const [coupon, setCoupon] = useState('');
  const [isLoading, setLoading] = useState(false);

  // 사용자 정보 가져오기
  const getUser = async () => {
    await axios
      .get('http://localhost:4000/users/1n2pgi02k5')
      .then(res => {
        console.log(res);
        setUser({
          address: res.data.address.city,
          coupons: res.data.coupons,
          points: res.data.points,
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
                <Route path="/orderapp" element={<MainPage user={user} />} />
                {/* 주문 페이지 라우터 */}
                <Route path="/orderapp/order" />
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
