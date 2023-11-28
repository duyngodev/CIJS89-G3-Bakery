import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct=()=>{
  const {id}=useParams()
  useEffect(()=>{
    
  },[])
}

const ProductList = () => {
  return (
    <div id="wrapper">
      <main>

        <section className="section_banner section_bannercap2">
          <img className="bl1" src="https://www.sugartown.vn/upload/sanpham/banh-kem-16889785646.png" alt="G3 BAKERY" />
          <img className="bl2" src="https://www.sugartown.vn/upload/sanpham/banh-kem-375-200-px-16889785644.png" alt="G3 BAKERY" />
          <div className="text_middle">
            <h1>Bánh Cookies</h1>
            <p>Bữa sáng nhanh gọn, ăn trưa nhẹ, ăn vặt hay cho đêm muộn</p>
          </div>
        </section>
        <section className="section_product">
          <div className="container containersp">
            <div className="khungsanphamcap2 w-100">
              <div className="col-md-3 col-sm-12 col-xs-12" id="leftsp">
                <div className="khungdanhmucleft w-100">
                  <div className="khungdanhmucleft1 ">
                    <div className="title_danhmucleft w-100">
                      <span>Danh mục</span>
                    </div>
                    <div className="listdanhmucleft w-100">
                      <ul>
                        <li className=""><a href="2011">20/11 </a> <span></span>
                        </li>
                        <li className=""><a href="banh-kem">Bánh Kem</a> <span></span>
                        </li>
                        <li className=" cap3"><a href="banh-kem-sua-tuoi">Bánh Kem sữa tươi</a><span></span></li>
                        <li className=" cap3"><a href="banh-kem-chocolate">Bánh Kem Chocolate</a><span></span></li>
                        <li className=" cap3"><a href="banh-kem-tao-hinh">Bánh Kem Tạo Hình</a><span></span></li>
                        <li className=" cap3"><a href="banh-kem-bap">Bánh Kem Bắp</a><span></span></li>
                        <li className=" cap3"><a href="banh-kem-trang-guong">Bánh Kem Tráng Gương</a><span></span></li>
                        <li className=" cap3"><a href="bento">Bento</a><span></span></li>
                        <li className=""><a href="banh-cap-dong">Bánh Cấp Đông</a> <span></span>
                        </li>
                        <li className="active"><a href="banh-cookies">Bánh Cookies</a> <span></span>
                        </li>
                        <li className=""><a href="banh-mi-banh-ngot">Bánh Mì - Bánh Ngọt</a> <span></span>
                        </li>
                        <li className=""><a href="banh-lanh">Bánh Lạnh</a> <span></span>
                        </li>
                      </ul>
                    </div>
                    <div className="title_danhmucleft w-100" style="margin-top: 20px">
                      <span>Lọc theo</span>
                    </div>
                    <div className="listdanhmucleft w-100" id="sapxepproduct">
                      <ul>
                        <li className=""><a data-val="1">Bánh Mới</a> <span></span></li>
                        <li className=""><a data-val="2">Bánh Seller</a> <span></span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="divmmbg"></div>
              </div>
              <div className="col-md-9 col-sm-12 col-xs-12" id="rightsp">
                <div className="w-100 title_danhmuccapxx">
                  <a className="click-show">
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                    <span>Danh mục</span>
                  </a>
                </div>
                <div className="khungsp w-100">
                  <div className="item_sp">
                    <div className="img_spnew "><img src="img/lblnew.png" alt="G3 BAKERY" /></div>
                    <div className="img_spsale hidden"><img src="img/lblsale.png" alt="G3 BAKERY" /></div>
                    <figure>
                      <div className="product--image__inner">
                        <div className="pro_img imgsp1 imgsp11">
                          <a href="banh-quy-kep-pho-mai-trung-muoi">
                            <img className="image-product-detail" src="upload/sanpham/ck-16715406953.png" alt="G3 BAKERY" />
                          </a>
                        </div>
                        <div className="datmua ">
                          <a className="add_to_cart" data-id="262">Đặt mua</a>
                        </div>
                      </div>
                    </figure>
                    <figcaption>
                      <h3><a href="banh-quy-kep-pho-mai-trung-muoi">Bánh Quy Kẹp Phô Mai Trứng Muối</a></h3>
                      <span>65,000 đ</span>
                    </figcaption>
                  </div>
                  <div className="item_sp">
                    <div className="img_spnew hidden"><img src="img/lblnew.png" alt="G3 BAKERY" /></div>
                    <div className="img_spsale hidden"><img src="img/lblsale.png" alt="G3 BAKERY" /></div>
                    <figure>
                      <div className="product--image__inner">
                        <div className="pro_img imgsp1 ">
                          <a href="cookies-roll-cripsy">
                            <img className="image-product-detail" src="upload/sanpham/cookies-roll-crispy-1-16578117426.png" alt="G3 BAKERY" />
                          </a>
                        </div>
                        <div className=" pro_img imgsp2">
                          <a href="cookies-roll-cripsy">
                            <img src="upload/sanpham/cookies-roll-crispy-2-16578117421.png" alt="G3 BAKERY" />
                          </a>
                        </div>
                        <div className="datmua ">
                          <a className="add_to_cart" data-id="173">Đặt mua</a>
                        </div>
                      </div>
                    </figure>
                    <figcaption>
                      <h3><a href="cookies-roll-cripsy">Cookies Roll Cripsy</a></h3>
                      <span>65,000 đ</span>
                    </figcaption>
                  </div>
                  <div className="item_sp">
                    <div className="img_spnew "><img src="img/lblnew.png" alt="G3 BAKERY" /></div>
                    <div className="img_spsale hidden"><img src="img/lblsale.png" alt="G3 BAKERY" /></div>
                    <figure>
                      <div className="product--image__inner">
                        <div className="pro_img imgsp1 imgsp11">
                          <a href="cookies-mini"><img className="image-product-detail" src="upload/sanpham/cookies-dong-tien01-16765289149.png" alt="G3 BAKERY" /></a>
                        </div>
                        <div className="datmua ">
                          <a className="add_to_cart" data-id="274">Đặt mua</a>
                        </div>
                      </div>
                    </figure>
                    <figcaption>
                      <h3><a href="cookies-mini">Cookies Mini</a></h3>
                      <span>35,000 đ</span>
                    </figcaption>
                  </div>
                  <div className="item_sp">
                    <div className="img_spnew hidden"><img src="img/lblnew.png" alt="G3 BAKERY" /></div>
                    <div className="img_spsale hidden"><img src="img/lblsale.png" alt="G3 BAKERY" /></div>
                    <figure>
                      <div className="product--image__inner">
                        <div className="pro_img imgsp1 ">
                          <a href="cookies-luoi-meo"><img className="image-product-detail" src="upload/sanpham/cookies-luoi-meo-1-16618824780.png" alt="G3 BAKERY" /></a>
                        </div>
                        <div className=" pro_img imgsp2">
                          <a href="cookies-luoi-meo"> <img src="upload/sanpham/cookies-luoi-meo-2-16618824789.png" alt="G3 BAKERY" /></a>
                        </div>
                        <div className="datmua ">
                          <a className="add_to_cart" data-id="247">Đặt mua</a>
                        </div>
                      </div>
                    </figure>
                    <figcaption>
                      <h3><a href="cookies-luoi-meo">Cookies Lưỡi Mèo</a></h3>
                      <span>60,000 đ</span>
                    </figcaption>
                  </div>
                  <div className="item_sp">
                    <div className="img_spnew "><img src="img/lblnew.png" alt="G3 BAKERY" /></div>
                    <div className="img_spsale hidden"><img src="img/lblsale.png" alt="G3 BAKERY" /></div>
                    <figure>
                      <div className="product--image__inner">
                        <div className="pro_img imgsp1 ">
                          <a href="banh-dua-mini"><img className="image-product-detail" src="upload/sanpham/banh-dua-201-16780829972.png" alt="G3 BAKERY" /></a>
                        </div>
                        <div className=" pro_img imgsp2">
                          <a href="banh-dua-mini"> <img src="upload/sanpham/banh-dua-202-16780829977.png" alt="G3 BAKERY" /></a>
                        </div>
                        <div className="datmua ">
                          <a className="add_to_cart" data-id="277">Đặt mua</a>
                        </div>
                      </div>
                    </figure>
                    <figcaption>
                      <h3><a href="banh-dua-mini">Bánh Dứa Mini </a></h3>
                      <span>98,000 đ</span>
                    </figcaption>
                  </div>
                  <div className="item_sp">
                    <div className="img_spnew "><img src="img/lblnew.png" alt="G3 BAKERY" /></div>
                    <div className="img_spsale hidden"><img src="img/lblsale.png" alt="G3 BAKERY" /></div>
                    <figure>
                      <div className="product--image__inner">
                        <div className="pro_img imgsp1 imgsp11">
                          <a href="cheese-stick"><img className="image-product-detail" src="upload/sanpham/chesee-stick01-16965743173.png" alt="G3 BAKERY" /></a>
                        </div>
                        <div className="datmua ">
                          <a className="add_to_cart" data-id="383">Đặt mua</a>
                        </div>
                      </div>
                    </figure>
                    <figcaption>
                      <h3><a href="cheese-stick">Cheese Stick</a></h3>
                      <span>95,000 đ</span>
                    </figcaption>
                  </div>
                </div>
                <div className="phantrang w-100">
                  <div className="pagecon">

                    <div className="nuttrang">
                      <a className="active">1</a>             </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProductList