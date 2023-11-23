import { Stack } from '@mui/material'
import LandingItem from './LandingItem'



const LandingList = ({ link }) => {
    const linkItem = link

    return (
        <Stack direction={{ xs: "row", sm: "column" }} justifyContent={"space-between"}>
            {linkItem.map((item, index) => {
                return (<LandingItem key={index} src={item.url} alt={item.alt} title={item.title} link={item.path} />)
            })}
        </Stack>

    )
}

export default LandingList