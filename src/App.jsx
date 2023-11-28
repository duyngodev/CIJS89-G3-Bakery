import './App.css'
import ProductDetail from './Pages/ProductDetail'
import Landing from './Pages/Landing'
import { Route, Routes } from 'react-router-dom'
import App2 from './App2'

function App() {
  
  return (
    <>
     <ProductDetail></ProductDetail> 
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Thêm Path to Service ở đây vì không có Header, Footer */}
        <Route path="*" element={<App2 />} />
      </Routes>
    </>
  )
}

export default App
