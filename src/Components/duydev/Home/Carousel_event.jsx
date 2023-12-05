import { Box, Button, ButtonBase, Stack } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Carousel_event = ({ data }) => {
    const eventStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '50% 50% 0 0 ',
        transition: 'transform ease-in-out 300ms',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    }
    const evetnBoxStyle = {
        width: '320px',
        height: '320px',
        borderRadius: '50% 50% 0 0',
        objectFit: 'cover',
        padding: '35px',
        paddingBottom: '20px',
        backgroundColor: 'white',
    }

    const buttonStyleEvent = {
        padding: '0',
        borderRadius: '15px',
        backgroundColor: 'transparent',
        width: '50%',
        margin: '0 auto',
        color: '#ae735d',
        border: '1px solid #ae735d',
        '&:hover': {
            color: 'white',
            backgroundColor: '#ae735d'
        }
    }

    const figureCaption = {
        position: 'relative',
        display: 'block',
        zIndex: ' 99',
        width: '100%',
        margin: '0 auto',
        '::after': {
            backgroundImage: 'url(https://sugartown.vn/img/chantrangtintuc.png)',
            content: "''",
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            backgroundSize: '100% 100%',
            height: '100%',
            zIndex: ' -1'
        }

    }
    return (
        <>
            {
                data.map((event, index) => {
                    return (
                        // <div key={index} style={{ width: '28%', flex: '0 0 auto' }} >

                        //     <img style={eventStyle} src={event.url} alt="" />
                        // </div>
                        <Box
                            key={index}
                            flex={"1 0 33.33333%"}
                            overflow={'hidden'}
                        >
                            <Link >
                                <Box sx={evetnBoxStyle}>
                                    <Box component="img" sx={eventStyle} src={event.url} alt="" />
                                </Box>
                            </Link>
                            <Box sx={figureCaption}>
                                <Box sx={{ width: '70%', margin: '0 auto' }}>
                                    <Box textAlign={'center'}  >
                                        <a style={{ textOverflow: 'ellipsis', zIndex: "10000", color: '#ae735d' }} >
                                            {event.title}
                                        </a>
                                        <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', zIndex: '1000' }}>{event.description}</p>
                                    </Box>
                                    <Stack >
                                        <Button sx={buttonStyleEvent}>xem them</Button>
                                        {/* <Button sx={{ display: { xs: 'block', sm: 'none' }, borderRadius: '15px', backgroundColor: 'transparent' }} >Tat ca bai viet</Button> */}
                                    </Stack>
                                </Box>
                            </Box>
                        </Box >
                    )
                })
            }
        </>
    )
}

export default Carousel_event