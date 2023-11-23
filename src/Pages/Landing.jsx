import { Box, Stack, styled } from "@mui/material"
import LandingList from "../Components/duydev/Landing/LandingList"

const Landing = () => {
  const BoxResponsive = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: '22px',
    right: '22px',
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      maxWidth: "1000px",
      width: "100%",
      margin: "auto",
    },
    // [theme.breakpoints.up("sm")]: {
    //   maxWidth: "1048px"
    // }
  }))

  const StackResponsive = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up("sm")]: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    }
  }))
  const link = [{
    url: "https://sugartown.vn/img/icontrangchu.png",
    alt: "Trang chủ",
    title: "TRANG CHỦ"
  },
  {
    url: "https://sugartown.vn/img/iconsanpham.png",
    alt: "Sản phẩm",
    title: "SẢN PHẨM DỊCH VỤ"
  },
  {
    url: "https://sugartown.vn/img/iconlogo.png",
    alt: "Logo",
    title: "CÂU CHUYỆN THƯƠNG HIỆU"
  },
  {
    url: "https://sugartown.vn/img/icontintuc.png",
    alt: "Tin tức",
    title: "TIN TỨC SỰ KIỆN"
  },
  {
    url: "https://sugartown.vn/img/iconkhuyenmai.png",
    alt: "Khuyến mãi",
    title: "CHƯƠNG TRÌNH KHUYẾN MÃI"
  },
  {
    url: "https://sugartown.vn/img/iconlienhe.png",
    alt: "Liên hệ",
    title: "LIÊN HỆ"
  },
  ]
  return (
    <section style={{
      background: "url('https://sugartown.vn/img/bgnavi.png') no-repeat center center",
      backgroundSize: "100% 100%",
      height: '100vh',
      zIndex: "-1"
    }}>
      <BoxResponsive>
        <StackResponsive >
          <LandingList link={[link[0], link[1], link[2]]} />
          <LandingList link={[link[3], link[4], link[5]]} />
        </StackResponsive>
      </BoxResponsive >
    </section>
  )
}

export default Landing