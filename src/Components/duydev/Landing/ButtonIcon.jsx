import styled from '@emotion/styled'
import { Button } from '@mui/material'

const ButtonIcon = ({ children }) => {
    const ButtonIcon = styled(Button)({
        height: "90px",
        width: "72px",
        borderRadius: "35px 35px 10px 10px",
        border: "1px solid black",
        marginBottom: "5px",
        position: "relative",
        // background: "white",
        opacity: "1",
        "&:hover": { backgroundColor: "white" },
        "&::after": {
            content: '""',
            top: "5px",
            left: "5px",
            height: "90px",
            width: "72px",
            borderRadius: "35px 35px 10px 10px",
            border: "1px solid black",
            position: "absolute",
            zIndex: "-10",
            // background: "white",



        }, "&::before": {
            content: '""',
            top: "10px",
            left: "10px",
            height: "90px",
            width: "72px",
            borderRadius: "35px 35px 10px 10px",
            border: "1px solid black",
            position: "absolute",
            zIndex: "-10",

        }
    })
    return (<>
        <ButtonIcon>
            {children}
        </ButtonIcon>

    </>
    )
}

export default ButtonIcon