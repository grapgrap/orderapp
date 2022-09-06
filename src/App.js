import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Loading from './Components/Loading';

function App() {
  const [user, setUser] = useState('');
  const [coupon, setCoupon] = useState('');
  const [isLoading, setLoading] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isLoading ? (
            <>
              {/* 메인 페이지 라우터 */}
              <Route path="/orderapp" />
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
}

export default App;
