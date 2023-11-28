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

const Main = (props) => {
    const [voucher, setVoucher] = useState('')
    const { data, setData } = props



    const totalPrice = data.reduce((total, value) => {
        return total + value.quantityInCart * value.price
    }, 0)
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const totalCart = data.reduce((total, value) => {
        return total + value.quantityInCart
    }, 0)

    const deleteBtClickHandler = (id) => {
        const newStateCart = data.filter((cartItem) => {
            if (cartItem.id != id) {
                return true
            }
        })
        localStorage.setItem("products",JSON.stringify(newStateCart))
        setData(newStateCart)
    }
    const decreaseBtClickHandler = (cartItem) => {
        const indexElement = data.findIndex((cartItemLoop) => {
            return cartItemLoop.id == cartItem.id
        })
        const cartNewState = [...data]
        cartNewState[indexElement] = { ...cartItem }
        cartNewState[indexElement].quantityInCart--
        localStorage.setItem("products",JSON.stringify(cartNewState))
        setData(cartNewState)
    }

    const increaseBtClickHandler = (cartItem) => {
        const indexElement = data.findIndex((cartItemLoop) => {
            return cartItemLoop.id == cartItem.id
        })
        const cartNewState = [...data]
        cartNewState[indexElement] = { ...cartItem }
        cartNewState[indexElement].quantityInCart++
        localStorage.setItem("products",JSON.stringify(cartNewState))
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

    const cartsCheckAmountNoEmpty = data.filter((cartItem) => {
        if (cartItem.quantityInCart > 0) {
            return true
        }
    })

    if (data.length == 0 || cartsCheckAmountNoEmpty.length == 0) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '80px',
                backgroundColor: '#FFFFFF',
                paddingLeft: '30px',
            }}
            >
                <div style={{
                    marginTop: '50px',
                    width: '780px',
                    height: '800px'
                }}
                >
                    <h2 style={{ textAlign: 'center' }}>Giỏ hàng của tôi ({totalCart})</h2>
                    <p style={{ textAlign: 'center' }}> Không có sản phẩm trong giỏ hàng !!!</p>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />

                    <Stack direction="row" spacing={2}>
                        <TextField
                            id="filled-textarea"
                            label="Nhập mã voucher của bạn (nếu có):"
                            placeholder="Ex: MINDX12345678"
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
                            }}>
                                Áp dụng
                            </Button>
                        </ThemeProvider>
                    </Stack>
                </div>
                <div style={{
                    marginTop: '50px',
                    width: '380px',
                    backgroundColor: '#ffdec5',
                    padding: '20px',
                    height: '100%'
                }}
                >
                    <h3 style={{ textAlign: 'center' }}>Thông tin đơn hàng</h3>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <p>Các món giao ngay ({totalCart})</p>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={12}>
                            <p>Tổng đơn :</p>
                            <h4>Tổng tiền thanh toán :</h4>
                        </Grid>
                        <Grid item xs={2}>
                            <p>{totalPrice}₫</p>
                            <p>{totalPrice}₫</p>
                        </Grid>
                    </Grid>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Stack spacing={2} sx={{ marginTop: '20px' }}>

                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{
                                width: '380px',
                                height: '40px',
                                fontSize: '15px',
                                backgroundColor: '#fbdbe0',
                                color: 'white'
                            }}>
                                Tiếp tục mua hàng
                            </Button>
                        </ThemeProvider>
                    </Stack>
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
                backgroundColor: '#FFFFFF',
                paddingLeft: '30px',
            }}
            >
                <div style={{
                    marginTop: '50px',
                    width: '780px',
                    height: 'auto'
                }}
                >
                    <h2 style={{ textAlign: 'center',fontSize:'18px' }}>Giỏ hàng của tôi ({totalCart})</h2>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <div>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={5}>
                                    <p>Chi tiết món</p>
                                </Grid>
                                <Grid item xs>
                                    <p>Giá</p>
                                </Grid>
                                <Grid item xs>
                                    <p>Số lượng</p>
                                </Grid>
                                <Grid item xs>
                                    <p>Tổng tiền</p>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    {data.map((cartItem) => {
                        if (cartItem.quantityInCart > 0) {
                            return (
                                <Box key={cartItem.id} sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2}>
                                            <img src={cartItem.imgURL1} style={{ height: '50px', width: '50px' }} alt="" />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <p>{cartItem.name}</p>
                                        </Grid>
                                        <Grid item xs={2.3}>
                                            <p>{VND.format(cartItem.price)}</p>
                                        </Grid>
                                        <Grid item xs={2.2}>
                                            <Stack direction="row" spacing={1} sx={{ marginTop: '14px' }} >
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
                                        <Grid item xs>
                                            <p style={{textAlign:'end'}}>{VND.format(cartItem.quantityInCart * cartItem.price)}</p>
                                        </Grid>
                                        <Grid item xs={0.6} sx={{ marginTop: '13px' }}>
                                            <HighlightOff fontSize='small' onClick={() => (deleteBtClickHandler(cartItem.id))} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            )
                        }
                    })}
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Stack direction="row" spacing={2} style={{marginTop:'30px'}}>
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
                    width: '380px',
                    backgroundColor: '#ffdec5',
                    padding: '20px',
                    height: '100%'
                }}
                >
                    <h3 style={{ textAlign: 'center' }}>Thông tin đơn hàng</h3>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <p>Các món giao ngay ({totalCart})</p>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Grid container spacing={1} columns={16}>
                        <Grid item xs={11}>
                            <p>Tổng đơn :</p>
                            <p>Bạn được giảm :</p>
                            <h4>Tổng tiền thanh toán :</h4>
                        </Grid>
                        <Grid item xs={2}>
                            <p>{VND.format(totalPrice)}</p>
                            <p style={{marginLeft:'45px'}}>{VND.format(0)}</p>
                            <p>{VND.format(totalPrice)}</p>
                        </Grid>
                    </Grid>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Stack spacing={2} sx={{ marginTop: '20px' }}>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{
                                width: '380px',
                                height: '40px',
                                fontSize: '15px',
                                backgroundColor: '#9e553b',
                                color: 'white'
                            }}>
                                Thanh Toán
                            </Button>
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{
                                width: '380px',
                                height: '40px',
                                fontSize: '15px',
                                backgroundColor: '#fbdbe0',
                                color: 'white'
                            }}>
                                Tiếp tục mua hàng
                            </Button>
                        </ThemeProvider>
                    </Stack>
                </div>

            </div>
        </>
    )
}

export default Main



