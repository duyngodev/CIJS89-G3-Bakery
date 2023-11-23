import { Box, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import ButtonIcon from './ButtonIcon'

const LandingItem = ({ src, alt, title, link }) => {
    return (
        <Box>
            <Link to={link}>
                <Stack justifyContent={'center'} alignContent={'center'} sx={{
                    marginBottom: "25px",
                    width: "105px",
                    flexWrap: 'wrap'
                }}>
                    <ButtonIcon width={"100%"}>
                        <img style={{ maxWidth: "100%", height: "auto" }} src={src} alt={alt} />
                    </ButtonIcon>
                    <Box sx={{
                        fontSize: { xs: "12px", sm: '14px' },
                        height: "38.5px",
                        wordBreak: "break-word"
                        , width: "100%"

                    }}>
                        <p >{title}</p>
                    </Box>
                </Stack>
            </Link>
        </Box>
    )
}

export default LandingItem