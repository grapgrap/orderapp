import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderPage from './Components/OrderPage/OrderPage';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/orderapp" element={<MainPage />} />
          <Route path="/orderapp/order" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
