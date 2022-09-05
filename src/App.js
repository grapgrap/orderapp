import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import OrderPage from './Components/OrderPage/OrderPage';
// import axios from 'axios';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 라우터 */}
          <Route path="/orderapp" element={<MainPage />} />
          {/* 주문 페이지 라우터 */}
          <Route path="/orderapp/order" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
