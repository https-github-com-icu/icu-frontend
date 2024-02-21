import { Route, Routes } from 'react-router-dom'
import './App.css'
import SigninPage from './Pages/SigninPage/index.jsx'
import MainPage from './Pages/MainPage/index.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<SigninPage />} />
      <Route path="/home" element={<MainPage />} />
    </ Routes>
    )
}

export default App
