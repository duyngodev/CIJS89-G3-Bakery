import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddCircle from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import HighlightOff from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const [voucher, setVoucher] = useState('')
    const { data, setData } = props
    const totalPrice = data?.reduce((total, value) => {
        return total + value.quantityInCart * value.price
    }, 0)
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const totalCart = data?.reduce((total, value) => {
        return total + value.quantityInCart
    }, 0)
    const totalAmount = data?.reduce((total, value) => {

        return total + value.id
    }, 0)

    const deleteBtClickHandler = (id) => {
        const newStateCart = data?.filter((cartItem) => {
            if (cartItem.id != id) {
                return true
            }
        })
        localStorage.setItem("cart", JSON.stringify(newStateCart))
        setData(newStateCart)
    }
    const decreaseBtClickHandler = (cartItem) => {
        const indexElement = data?.findIndex((cartItemLoop) => {
            return cartItemLoop.id == cartItem.id
        })
        const cartNewState = [...data]
        cartNewState[indexElement] = { ...cartItem }
        cartNewState[indexElement].quantityInCart--
        localStorage.setItem("cart", JSON.stringify(cartNewState))
        setData(cartNewState)
    }

    const increaseBtClickHandler = (cartItem) => {
        const indexElement = data?.findIndex((cartItemLoop) => {
            return cartItemLoop.id == cartItem.id
        })
        const cartNewState = [...data]
        cartNewState[indexElement] = { ...cartItem }
        cartNewState[indexElement].quantityInCart++
        localStorage.setItem("cart", JSON.stringify(cartNewState))
        setData(cartNewState)
    }

    const handleClickVoucher = () => {
        return setVoucher('+ Phiếu giảm giá không tồn tại')
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const theme = createTheme({
        palette: {
            ochre: {
                main: '#FF8080',
                light: '#E9DB5D',
                dark: '#CE5A67',
                contrastText: 'white',
            },
        },
    });

    const cartsCheckAmountNoEmpty = data?.filter((cartItem) => {
        if (cartItem.quantityInCart > 0) {
            return true
        }
    })

    if (!data || data?.length == 0 || cartsCheckAmountNoEmpty?.length == 0) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '80px',
                backgroundImage: 'linear-gradient(#FFFFFF, #FDEDEF )',
                marginTop: '14px',
                paddingLeft: '150px',
                paddingRight: '150px',
                fontSize: '14px',
                fontWeight: '400',
                paddingBottom: '300px',
            }}
            >
                <div style={{
                    marginTop: '60px',
                    width: '55%',
                    height: 'auto'
                }}
                >
                    <h2 style={{ textAlign: 'center', fontSize: '18px' }}>Giỏ hàng của tôi ({data?.length})</h2>
                    <p style={{ textAlign: 'center' }}> Không có sản phẩm trong giỏ hàng !!!</p>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />

                    <Stack direction="row" spacing={2}>
                        <TextField
                            id="filled-textarea"
                            label="Nhập mã voucher của bạn (nếu có):"
                            placeholder="Ex: G3B12345678"
                            multiline
                            variant="filled"
                            style={{ width: '100%', padding: '10px' }}
                            color="warning"
                        />
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{
                                width: '150px',
                                height: '40px',
                                fontSize: '15px',
                                backgroundColor: '#9e553b',
                                color: 'white'
                            }} onClick={handleClickVoucher}>
                                Áp dụng
                            </Button>
                        </ThemeProvider>
                    </Stack>
                    {voucher}
                </div>
                <div style={{
                    marginTop: '50px',
                    width: '40%',
                    backgroundColor: '#ffdec5',
                    padding: '20px',
                    height: '100%',
                }}
                >
                    <h3 style={{ textAlign: 'center' }}>Thông tin đơn hàng</h3>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <p>Các món giao ngay ({totalCart})</p>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Grid container spacing={1} columns={16}>
                        <Grid item xs={12.5}>
                            <p>Tổng đơn :</p>
                            <h6>Tổng tiền thanh toán :</h6>
                        </Grid>
                        <Grid item xs={2}>
                            <p>{VND.format(0)}</p>
                            <p>{VND.format(0)}</p>
                        </Grid>
                    </Grid>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" sx={{
                            width: '100%',
                            height: '100%',
                            fontSize: '15px',
                            backgroundColor: '#fbdbe0',
                            color: 'white'
                        }}>
                            <Link to="/" style={{color:'white'}}>Tiếp tục mua hàng</Link>
                        </Button>
                    </ThemeProvider>
                </div>

            </div>
        )
    }
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '80px',
                backgroundImage: 'linear-gradient(#FFFFFF, #FDEDEF )',
                marginTop: '14px',
                paddingLeft: '150px',
                paddingRight: '150px',
                fontSize: '14px',
                fontWeight: '400',
                paddingBottom: '300px',
            }}
            >
                <div style={{
                    marginTop: '60px',
                    width: '55%',
                    height: 'auto'
                }}
                >
                    <h2 style={{ textAlign: 'center', fontSize: '18px' }}>Giỏ hàng của tôi ({data?.length})</h2>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={4.8}>
                                <p>Chi tiết món</p>
                            </Grid>
                            <Grid item xs={2.2}>
                                <p>Giá</p>
                            </Grid>
                            <Grid item xs>
                                <p>Số lượng</p>
                            </Grid>
                            <Grid item xs={2.4}>
                                <p>Tổng tiền</p>
                            </Grid>
                        </Grid>
                    </Box>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    {data?.map((cartItem) => {
                        if (cartItem.quantityInCart > 0) {
                            return (
                                <Box key={cartItem.id} sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2}>
                                            <img src={cartItem.img1} style={{ height: '50px', width: '50px' }} alt="" />
                                        </Grid>
                                        <Grid item xs={2.5}>
                                            <p>{cartItem.name}</p>
                                        </Grid>
                                        <Grid item xs={2.3}>
                                            <p>{VND.format(cartItem.price)}</p>
                                        </Grid>
                                        <Grid item xs={2.2}>
                                            <Stack direction="row" spacing={1} >
                                                <RemoveCircle fontSize='small' sx={{
                                                    color: '#eeeeee', minWidth: '20px',
                                                    width: 'auto',
                                                    transition: 'all 300ms ease'
                                                }} onClick={() => (decreaseBtClickHandler(cartItem))} />
                                                <p>{cartItem.quantityInCart}</p>
                                                <AddCircle fontSize='small' sx={{
                                                    color: '#eeeeee', minWidth: '20px',
                                                    width: 'auto',
                                                    transition: 'all 300ms ease'
                                                }} onClick={() => (increaseBtClickHandler(cartItem))} />
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <p style={{ textAlign: 'end' }}>{VND.format(cartItem.quantityInCart * cartItem.price)}</p>
                                        </Grid>
                                        <Grid item xs={0.6}>
                                            <HighlightOff fontSize='small' onClick={() => (deleteBtClickHandler(cartItem.id))} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            )
                        }
                    })}
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Stack direction="row" spacing={2} style={{ marginTop: '30px' }}>
                        <TextField
                            id="filled-textarea"
                            label="Nhập mã voucher của bạn (nếu có):"
                            placeholder="Ex: G3B12345678"
                            multiline
                            variant="filled"
                            style={{ width: '100%', padding: '10px' }}
                            color="warning"
                        />
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{
                                width: '150px',
                                height: '40px',
                                fontSize: '15px',
                                backgroundColor: '#9e553b',
                                color: 'white',
                            }} onClick={handleClickVoucher}>
                                Áp dụng
                            </Button>
                        </ThemeProvider>
                    </Stack>
                    <div>{voucher}</div>
                </div>
                <div style={{
                    marginTop: '50px',
                    width: '40%',
                    backgroundColor: '#ffdec5',
                    padding: '20px',
                    height: '100%',
                }}
                >
                    <h3 style={{ textAlign: 'center' }}>Thông tin đơn hàng</h3>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <p>Các món giao ngay ({data?.length})</p>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Grid container spacing={1} columns={16}>
                        <Grid item xs={12}>
                            <p>Tổng đơn :</p>
                            <p>Bạn được giảm :</p>
                            <h6>Tổng tiền thanh toán :</h6>
                        </Grid>
                        <Grid item xs={2}>
                            <p>{VND.format(totalPrice)}</p>
                            <p style={{ marginLeft: '45px' }}>{VND.format(0)}</p>
                            <p>{VND.format(totalPrice)}</p>
                        </Grid>
                    </Grid>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Stack spacing={2} sx={{ marginTop: '20px' }}>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{
                                width: '100%',
                                height: '100%',
                                fontSize: '15px',
                                backgroundColor: '#9e553b',
                                color: 'white'
                            }}>
                                Thanh Toán
                            </Button>
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{
                                width: '100%',
                                height: '100%',
                                fontSize: '15px',
                                backgroundColor: '#fbdbe0',
                                color: 'white'
                            }}>
                                 <Link to="/" style={{color:'white'}}>Tiếp tục mua hàng</Link>
                            </Button>
                        </ThemeProvider>
                    </Stack>
                </div>

            </div >
        </>
    )
}

export default Cart