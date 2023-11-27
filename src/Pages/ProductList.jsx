import { Box, Button, Checkbox, Container, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, Radio, RadioGroup, Stack } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React, { useState } from 'react'

const ProductList = () => {
  //CSS properties
  const bannerStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: "url(https://sugartown.vn/upload/sanpham/banh-kem-16889785646.png)",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const bannerContainer = {
    height: '700px',
    width: '100%'
  }

  //Button switch
  const [state, setState] = useState({
    New: false,
    sell: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { New, sell } = state;

  //danh mục Filtering
  const [filterItem, setFilterItem] = useState('20/11')
  const filterData = [
    '20/11', 'BÁNH KEM SỮA', ' + Bánh Kem Sữa Tươi', ` +  Bánh Kem Chocolate`, '+  Bánh Kem Tạo Hình', '+  Bánh Kem Bắp', '+  Bánh Kem Tráng Gương', '+  Bento', 'BÁNH CẤP ĐÔNG', 'BÁNH COOKIES', 'BÁNH MÌ - BÁNH NGỌT', 'BÁNH LẠNH'
  ]


  return (
    <>
      <Box>
        <div style={bannerContainer}>
          <div style={bannerStyle}></div>
        </div>
      </Box>
      <Box>
        <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: '20px' }}>
          <Box>
            {/* Danh mục */}
            <FormControl>
              <FormLabel id="demo-radio-buttons-group" sx={{ textAlign: 'left', fontSize: '2rem', textTransform: "uppercase" }}>Danh mục</FormLabel>
              <Divider />
              <RadioGroup
                aria-labelledby="filter-list"
                value={filterItem}
                name="radio-buttons-group"
                onChange={e => setFilterItem(e.target.value)}
                sx={{ width: '250px' }}
              >

                {
                  filterData.map((value, i) => {
                    return (
                      <div key={i} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* <div>{value}</div> */}
                        <FormControlLabel value={value} control={<Radio icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />} label={value} />
                      </div>
                    )
                  })
                }

              </RadioGroup>
            </FormControl>
            {/* Lọc theo */}
            <Box sx={{ display: 'flex' }}>
              <FormControl >
                <FormLabel sx={{ fontSize: '30px', textTransform: 'uppercase' }} component="legend">Lọc theo</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={New} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} onChange={handleChange} name="New" />
                    }
                    label="New"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={sell} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} onChange={handleChange} name="sell" />
                    }
                    label="sell"
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ width: '100%' }}>
            <Grid container spacing={0} >
              <Grid m={2} item xs={3} sx={{ bgcolor: 'green' }}>
                <Box >Item1</Box>
              </Grid>
              <Grid m={2} item xs={3} sx={{ bgcolor: 'green' }}>
                <Box >Item1</Box>
              </Grid>
              <Grid m={2} item xs={3} sx={{ bgcolor: 'green' }}>
                <Box >Item1</Box>
              </Grid>
              <Grid m={2} item xs={3} sx={{ bgcolor: 'green' }}>
                <Box >Item1</Box>
              </Grid>


            </Grid>
            <Stack flexDirection={'row'} sx={{ flexWrap: 'wrap' }}>
              {/* <div style={{ width: '200px', height: '200px', backgroundColor: 'black', margin: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Item</div>
              <div style={{ width: '200px', height: '200px', backgroundColor: 'pink', margin: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Item</div>
              <div style={{ width: '200px', height: '200px', backgroundColor: 'yellow', margin: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Item</div>
              <div style={{ width: '200px', height: '200px', backgroundColor: 'green', margin: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Item</div> */}



            </Stack>
          </Box>
        </Container>
      </Box>
    </>

  )
}

export default ProductList