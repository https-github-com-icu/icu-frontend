import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './Pages/RegisterPage/index.jsx'
import HomePage from './Pages/HomePage/index.jsx'
import LoginPage from './Pages/LoginPage/index.jsx'
import MyPage from './Pages/MyPage/index.jsx'
import StoreRegisterPage from './Pages/StoreRegisterPage/index.jsx'
import CctvPage from './Pages/CctvPage/index.jsx'

function App() {

  return (
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />

    <Route path="/homepage" element={<HomePage />} />
    <Route path="/mypage" element={<MyPage />} />
    <Route path="/cctv" element={<CctvPage />} />

      {/* <Route path='product/:id' element={<DetailPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='order' element={<OrderPage />} />
        <Route path='*' element={<NotFoundPage />} /> */}
    </Routes>
    )
}

export default App
