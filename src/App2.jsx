import './App.css'
import Footer from './Components/shared/Footer'
import Header from './Components/shared/Header'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound404 from './Pages/NotFound404'
import ProductList from './Pages/ProductList'
import ProductDetail from './Pages/ProductDetail'

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path='/products/productDetail' element={<ProductDetail/>}/>
                {/* Thêm các path còn lại vào đây */}
                <Route path="*" element={<NotFound404 />} />

            </Routes>
            <Footer />
        </>

    )
}

export default App

