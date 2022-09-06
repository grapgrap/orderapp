import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 라우터 */}
          <Route path="/orderapp" />
          {/* 주문 페이지 라우터 */}
          <Route path="/orderapp/order" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
