import { Box, Stack, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import ButtonIcon from './ButtonIcon'

const LandingItem = ({ src, alt, title }) => {
    const TagPResponsive = styled("p")(({ theme }) => ({
        fontSize: "12px",
        height: "38.5px",
        wordBreak: "break-word",
        [theme.breakpoints.up("md")]: {
            fontSize: "14px",

        }
    }))
    const StackResponsive = styled(Stack)(({ theme }) => ({
        display: "flex ",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "90px",
        alignContent: "center",
        [theme.breakpoints.up("sm")]: { width: "100px" }
    }))
    return (
        <Box>
            <Link to="" >
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
                        <p style={{ color: '#9d573c' }}>{title}</p>
                    </Box>
                </Stack>
            </Link>
        </Box>
    )
}

export default LandingItem