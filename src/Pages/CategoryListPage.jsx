import React from 'react'
import '../Components/nhandev/CategoryListPage.scss'

const CategoryListPage = () => {
    return (
        <>
            <div id="wrapper">
                <main>
                    <section className="section_banner">
                        <img className="bl1" src="https://www.sugartown.vn/upload/sanpham/-16489067484.jpg" alt="G3-BAKERY" />
                        <img className="bl2" src="https://www.sugartown.vn/upload/sanpham/banner-trang-chu01-16494772398.png" alt="G3-BAKERY" />
                    </section>
                    <section className="section_danhmuctc_cap1">
                        <div className="container container_cap1">
                            <div className="title_danhmuccap w-100">
                                <span>Danh mục</span>
                            </div>
                            <div className="danhsachcap2 w-100">
                                <div className="item_cap2">
                                    <a href="/products">
                                        <figure><img src="https://www.sugartown.vn/upload/sanpham/asset-1-16998632120.png" alt="G3-BAKERY" /></figure>
                                        <div className="middle">
                                            <span className="text">20/11 </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="item_cap2">
                                    <a href="/products">
                                        <figure><img src="https://www.sugartown.vn/upload/sanpham/asset-10-16965766006.png" alt="G3-BAKERY" /></figure>
                                        <div className="middle">
                                            <span className="text">Bánh Kem</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="item_cap2">
                                    <a href="/products">
                                        <figure><img src="https://www.sugartown.vn/upload/sanpham/asset-11-16965772749.png" alt="G3-BAKERY" /></figure>
                                        <div className="middle">
                                            <span className="text">Bánh Cấp Đông</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="item_cap2">
                                    <a href="/products">
                                        <figure><img src="https://www.sugartown.vn/upload/sanpham/asset-12-16965774958.png" alt="G3-BAKERY" /></figure>
                                        <div className="middle">
                                            <span className="text">Bánh Cookies</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="item_cap2">
                                    <a href="/products">
                                        <figure><img src="https://www.sugartown.vn/upload/sanpham/danh-muc-sp-banh-mi--16521886201.png" alt="G3-BAKERY" /></figure>
                                        <div className="middle">
                                            <span className="text">Bánh Mì - Bánh Ngọt</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="item_cap2">
                                    <a href="/products">
                                        <figure><img src="https://www.sugartown.vn/upload/sanpham/danh-muc-banh-lanh--16521886408.png" alt="G3-BAKERY" /></figure>
                                        <div className="middle">
                                            <span className="text">Bánh Lạnh</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
export default CategoryListPage