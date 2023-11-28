import React from 'react'
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';
import Email from '@mui/icons-material/Email';
import Cake from '@mui/icons-material/Cake';



const Footer = () => {


    return (
        <>
            <div style={{
                background: "url('https://www.sugartown.vn/img/luonsongfooter.png') no-repeat center top",
                backgroundSize: '100% 100%',
                color: '#9e553b',
                paddingTop: '80px',
                marginTop: '100px'

            }}>
                <div style={{ marginLeft: '200px', fontSize: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={2} sx={{ marginLeft: '40px' }}>
                            <p>CONTACT</p>
                        </Grid>
                        <Grid item xs={5}>
                            <p>GET SUGARY LETTERS</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p>OUR PRODUCT</p>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ marginLeft: '140px', fontSize: '10px',marginTop:'20px' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3.3}>
                            <h2>G3 Bakery</h2>
                            <Stack direction="row" spacing={1}>
                                <Phone sx={{fontSize:'15px'}} />
                                <p>0707155988</p>
                            </Stack>
                            <br />
                            <Stack direction="row" spacing={1}>
                                <LocationOn sx={{fontSize:'15px'}}/>
                                <p>Số 10, Đường số 18, KDC Vạn Phúc,
                                    P. Hiệp Bình Phước, TP. HCM</p>
                            </Stack>
                        </Grid>
                        <Grid item xs={3.5} sx={{ marginLeft: '40px' }}>
                            <Stack direction="row" spacing={1}>
                                <Email sx={{fontSize:'15px'}}/>
                                <p style={{ marginTop: '2px' }}>Email:</p>
                                <input type="text" placeholder='Đăng ký nhận bảng tin' style={{ padding: '5px', borderColor: '#FF8080', fontSize: '10px',width:'100%',borderRadius:'10px' }} />
                                <button style={{
                                backgroundColor: '#9e553b', border: 'none', color: 'white', borderRadius: '10px', padding: '3px 12px', fontSize: '12px',position:'relative',
                                top:'30px',right:'45px'
                            }}>Gửi</button>
                            </Stack>
                           
                        </Grid>
                        <Grid item xs sx={{ marginLeft: '60px' }}>
                            <Stack direction="row" spacing={1}>
                                <Cake sx={{fontSize:'15px'}}/>
                                <p style={{ marginTop: '2px' }}>Bakery Store</p>
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
                <p style={{ backgroundColor: '#9e553b', color: 'white', textAlign: 'center', fontSize: '13px', padding: '5px', letterSpacing: '2px' }}>2023 G3 BAKERY All right reserved</p>
            </div>
        </>
    )
}

export default Footer