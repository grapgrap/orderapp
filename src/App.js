import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderPage from './Components/OrderPage/OrderPage';
import MainPage from './Components/MainPage/MainPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

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
            element={<OrderPage user={user.info} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
