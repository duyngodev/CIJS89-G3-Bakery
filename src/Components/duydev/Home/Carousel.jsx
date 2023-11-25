// import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { IconButton, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
// import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
// import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const imgUrl = [{
        index: '1',
        url: '	https://sugartown.vn/thumb/1366x700/1/upload/hinhanh/2a-1366x700-01-16457183443.png'
    },
    {
        index: '2',
        url: 'https://sugartown.vn/thumb/1366x700/1/upload/hinhanh/2-1366x700-06-16457183359.png'
    }
    ]


    const slideStyle = {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${imgUrl[currentIndex].url})`

    }

    const carouselStyle = {
        width: '100%',
        height: '500px'
    }

    const sliderStyle = {
        height: '100%',
        position: 'relative'
    }

    const leftButtonStlye = {
        position: 'absolute',
        top: '50%',
        transform: 'translate( 0 -50%)',
        left: '38px',
        fontSize: '45px',
        color: 'white',
        '&:hover': {
            backgroundColor: '#ccc',
            borderRadius: '50%',
        }
    }
    const rightButtonStlye = {
        position: 'absolute',
        top: '50%',
        transform: 'translate( 0 -50%)',
        right: '38px',
        fontSize: '45px',
        color: 'white',
        '&:hover': {
            backgroundColor: '#ccc',
            borderRadius: '50%',
        }
    }

    function goToLeft() {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? imgUrl.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }


    function goToRight() {
        const isLastSlide = currentIndex === imgUrl.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div style={carouselStyle}>
            <div style={sliderStyle}>
                <IconButton sx={leftButtonStlye} onClick={goToLeft}> <WestIcon /> </IconButton>
                <IconButton sx={rightButtonStlye} onClick={goToRight}> <EastIcon /> </IconButton>
                <div style={slideStyle}></div>
                <div style={{ display: 'flex', justifyContent: ' center' }}>
                    <RadioGroup
                        value={currentIndex + 1}
                        onChange={(e) => setCurrentIndex(e.target.value - 1)}
                        sx={{
                            display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: '20px', alignContent: 'center'
                        }}
                    >
                        {
                            imgUrl.map((slide, index) =>
                                <Radio value={slide.index} key={index} icon={<TurnedInNotIcon sx={{ color: 'white' }} />} checkedIcon={<TurnedInIcon sx={{ color: 'white' }} />} />
                            )
                        }
                    </RadioGroup>
                </div>
                <div>

                </div>
            </div>
        </div >
    )
}

// const Carousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0)

//     //img link
//     const imgUrl = [{
//         index: '1',
//         url: '	https://sugartown.vn/thumb/1366x700/1/upload/hinhanh/2a-1366x700-01-16457183443.png'
//     },
//     {
//         index: '2',
//         url: 'https://sugartown.vn/thumb/1366x700/1/upload/hinhanh/2-1366x700-06-16457183359.png'
//     }
//     ]

//     const containerStyle = {
//         width: '100%',
//         height: '500px  ',
//         // margin: '0 auto'
//     }

//     const slideStyle = {
//         width: '100%',
//         height: '100%',
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundImage: `url(${imgUrl[currentIndex].url}`

//     }

//     const leftArrowStyle = {
//         position: 'absolute',
//         top: '50%',
//         transform: 'translate(0 -50%)',
//         zIndex: '1',
//         left: '32px',
//         color: 'white',
//         fontSize: '45px'
//     }

//     const rightArrowStyle = {
//         position: 'absolute',
//         top: '50%',
//         transform: 'translate(0 -50%)',
//         zIndex: '1',
//         right: '32px',
//         color: 'white',
//         fontSize: '45px'
//     }

//     const dotContainerStyle = {
//         display: 'flex',
//         justifyContent: 'center',
//     }

//     const dotStyle = {
//         margin: '0 12px',
//         fontSize: '30px'
//     }

//     function goToPrevious() {
//         const isFirstSlide = currentIndex === 0
//         const newIndex = isFirstSlide ? imgUrl.length - 1 : currentIndex - 1
//         setCurrentIndex(newIndex)
//     }

//     function goToNext() {
//         const isLastSlide = currentIndex === imgUrl.length - 1
//         const newIndex = isLastSlide ? 0 : currentIndex + 1
//         setCurrentIndex(newIndex)
//     }

//     function goToSlide(index) {
//         setCurrentIndex(index - 1)
//         // console.log(imgUrl[index].url);
//     }
//     return (
//         <div style={containerStyle}>
//             <div style={{ height: '100%', position: 'relative' }}>
//                 <IconButton sx={leftArrowStyle} onClick={goToPrevious}>
//                     <WestIcon />
//                 </IconButton>
//                 <IconButton sx={rightArrowStyle} onClick={goToNext}>
//                     <EastIcon />
//                 </IconButton>
//                 <div aria-label='backgroundImg' style={slideStyle}></div>
//                 <div style={dotContainerStyle}>
//                     {imgUrl.map((img, index) => {
//                         return <div key={index} style={dotStyle} onClick={() => goToSlide(img.index)}> X </div>
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Carousel

/**
 * 1. Có bao nhiêu slide sẽ có tương đương bấy nhiêu nút chọn slideshow qua Format Control
 * 2. bấm vào nút chuyển slideshow nào sẽ pick ra value và áp vào render img tương ứng.
 * 3. Render default chưa có
 */
