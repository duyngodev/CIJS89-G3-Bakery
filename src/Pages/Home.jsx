import React from 'react'
import Header from '../Components/shared/Header'
import { Box, Container, CssBaseline } from '@mui/material'
import Carousel from '../Components/duydev/Home/Carousel'
import NgotVaThuong from '../Components/duydev/Home/NgotVaThuong'
import Events from '../Components/duydev/Home/Events'
import Discount from '../Components/duydev/Home/Discount'
import Logo from '../Components/duydev/Home/Logo'
import Services from '../Components/duydev/Home/Services'


const Home = () => {
  return (
    <CssBaseline>
      <Box sx={{ backgroundColor: "#FFFFFF", backgroundImage: "linear-gradient(#FFFFFF, #FDEDEF)",paddingBottom:'300px'}}>
        <Carousel />
        <NgotVaThuong />
        <Events />
        <Discount />
        <Logo />
        <Services />
      </Box>
    </CssBaseline>
  )
}

export default Home