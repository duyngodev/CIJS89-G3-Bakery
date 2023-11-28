import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'



function App() {
  const [data, setData] = useState([])
  const getLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("products") ?? "")
    setData(data)
  }

  useEffect(() => {
    getLocalStorage()
  }, [])

  return (
    <>
      <Navbar data={data}/>
      <Main data={data} setData={setData} />
      <Footer  />
    </>
  )
}

export default App
