import { Box, Button, Container, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Events = () => {

    const imgStyle = {
        width: '340px',
        height: '100%',
    }

    const dataEvents = [{
        url: 'https://sugartown.vn/thumb/365x360/1/upload/tin3cap/web-17008051161.jpg',
        title: 'BLACK FRIDAY| SIÊU SALE GIẢM SỐC 20%',
        description: 'Ưu đãi lớn nhất năm đang đổ bộ đến Sugar Town.'
    },
    {
        url: '	https://sugartown.vn/thumb/365x360/1/upload/tin3cap/ban-sao-cua-28-16960629847.png',
        title: 'ĐẶT BÁNH NGAY - ƯU ĐÃI CHỈ CÒN TRONG HÔM NAY',
        description: 'Khi nhắc đến Sugar Town là không thể không nhắc đến Bánh Mì Phô Mai Tan Chảy - món bánh gây “thương nhớ” với bao khách hàng. Đặc biệt gần đây được rất nhiều bạn trẻ, các Hot Tiktoker săn đón và yêu thích do vị thơm ngon béo ngậy và dễ gây nghiện, mọi lứa '
    },
    {
        url: '	https://sugartown.vn/thumb/365x360/1/upload/tin3cap/comotvinicegiualongsaigon-16615066899.JPG',
        title: 'CÓ MỘT VENICE GIỮA LÒNG SÀI GÒN',
        description: 'Lấy cảm hứng từ lối kiến trúc độc đáo, cùng bầu không khí lãng mạn, trang nhã từ thành phố Venice (Ý), Sugar Town khoác lên mình chiếc áo sang trọng nhưng không kém phần ấm cúng, gần gũi, khác biệt hoàn toàn so với những nhà hàng fine dining mà bạn từng b'
    },
    {
        url: 'https://sugartown.vn/thumb/365x360/1/upload/tin3cap/countdown-16517301113.png',
        title: "NEW YEAR'S EVE PARTY 2022 ????",
        description: 'Tận hưởng trọn vẹn khoảng khắc bước sang năm mới cùng người thương và gia đình với chương trình ẩm thực đặc sắc và lễ hội âm nhạc countdown sống động tại Sugar Town - Nhà hàng ven sông đậm chất Âu ngay tại TP. Thủ Đức.'
    },
    {
        url: 'https://sugartown.vn/thumb/365x360/1/upload/tin3cap/giang-sinh-16517289710.png',
        title: 'TẬN HƯỞNG ĐÊM GIÁNG SINH NGỌT NGÀO ',
        description: 'Tại nhà hàng đậm chất Venice thơ mộng!'
    },
    {
        url: '	https://sugartown.vn/thumb/365x360/1/upload/tin3cap/thiet-ke-chua-co-ten-1-16517277964.png',
        title: 'GRAND OPENING SUGAR TOWN RESTAURANT',
        description: 'Bạn đã sẵn sàng để trải nghiệm một nền ẩm thực Châu Âu tuyệt hảo trong không gian kiến trúc đậm chất Venice lãng mạn chỉ có tại Sugar Town chưa?'
    },
    {
        url: '	https://sugartown.vn/thumb/365x360/1/upload/tin3cap/thiet-ke-chua-co-ten-16511256857.png',
        title: '️ 02.12.2021 - SUGAR TOWN GRAND OPENING ️',
        description: "TƯNG BỪNG KHAI TRƯƠNG CỬA HÀNG ĐẦU TIÊN \nSau bao ngày háo hức chờ đợi, cửa hàng Sugar Town đầu tiên sẽ chính thức hoạt động tại thành phố Thủ Đức!"
    },
    {
        url: '	https://sugartown.vn/thumb/365x360/1/upload/tin3cap/255td-16795646275.png',
        title: '25.03.2023 - CÙNG   SUGAR   TOWN   HƯỞNG   ỨNG   CHIẾN   DỊCH ',
        description: 'JOIN THE BIGGEST HOUR FOR EARTH\nGiờ Trái Đất - Hành động nhỏ, thay đổi lớn!'
    }]

    const eventStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '50% 50% 0 0 ',
        transition: 'transform ease-in-out 500ms',
        '&:hover': {
            transform: 'scale(1,2)'///??
        }
    }
    const evetnBoxStyle = {
        width: '320px',
        height: '320px',
        borderRadius: '50% 50% 0 0',
        objectFit: 'cover',
        padding: '35px',
        backgroundColor: 'white'
    }

    return (
        <Box>
            <Box position="relative" sx={{ top: '40%' }}>
                <img style={imgStyle} src="	https://sugartown.vn/img/texttintuc.png" alt="" />
            </Box>
            <Container p={'100px'}>

                <Stack flexDirection={'row'} sx={{ overflow: 'hidden', width: { md: "750px", lg: "960px" }, mx: 'auto ' }} spacing={0}>
                    {dataEvents.map((event, index) => {
                        return (
                            // <div key={index} style={{ width: '28%', flex: '0 0 auto' }} >

                            //     <img style={eventStyle} src={event.url} alt="" />
                            // </div>
                            <Box key={index} flex={"0 0 auto"} overflow={'hidden'}>
                                <Link >
                                    <Box sx={evetnBoxStyle}>
                                        <Box component="img" sx={eventStyle} src={event.url} alt="" />
                                    </Box>
                                </Link>
                                <Box>
                                    <Link sx={{ textOverflow: 'ellipsis' }}>
                                        {event.title}
                                    </Link>
                                    <p style={{ textOverflow: 'ellipsis' }}>{event.description}</p>
                                </Box>
                                <Stack>
                                    <button >xem them</button>
                                    <Button sx={{ display: { xs: 'block', sm: 'none' } }} varient="text">Tat ca bai viet</Button>
                                </Stack>
                            </Box>
                        )
                    })}
                </Stack >
            </Container>
        </Box >
    )
}

export default Events