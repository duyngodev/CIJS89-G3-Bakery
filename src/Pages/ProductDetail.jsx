import SingleProduct from "../Components/nhandev/SingleProduct";
import React, { useContext, useEffect, useState } from "react";
import { ApiStateContext } from '../Components/nhandev/ApiStateProvider';
import { useRoutes } from "react-router-dom";
import '../Components/nhandev/ProductDetail.scss'
import '../Components/nhandev/Swiper.scss'
import ListSingleProduct from "../Components/nhandev/ListSingleProduct";
const ProductDetail = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useContext(ApiStateContext)
  const id = 24;
  const [listData, setListData] = useState([]);
  const [Examples, setExamples] = useState([]);

  const getExamples = () => {
    const examples = listData.filter(item => item.category === data.category && item.id !== data.id);
    setExamples(examples);
  };
  //
  const getProductSingle = async () => {
    setLoading(true)
    const result = await fetch(
      `https://6562048cdcd355c083247a65.mockapi.io/Products/ProductList/${id}`,
      {
        method: "GET",
      }
    );
    const jsonRes = await result.json();
    setData(jsonRes);
    setLoading(false);
  };
  const getProducts= async () => {
    setLoading(true)
    const result = await fetch(
      `https://6562048cdcd355c083247a65.mockapi.io/Products/ProductList`,
      {
        method: "GET",
      }
    );
    const jsonRes = await result.json();
    setListData(jsonRes);
    setLoading(false);
  };

  useEffect(() => {
    getProductSingle();
    getProducts();

  }, []);

  useEffect(() => {
    getExamples();
  }, [data, listData]);
  return (
    <>
      <div id="wrapper">
        <main>
          <section style={{ background: "#ebebeb" }}>
            <div className="container">
              <div className="title_cattintuc w-100">
                <h2><img src="https://www.sugartown.vn/img/muiten.png" alt="G3-BAKERY" />
                  <a href="bakery-store">Tất cả sản phẩm</a>
                </h2>
              </div>
            </div>
          </section>
          <SingleProduct setData={setData} data={data} getProduct={getProductSingle} />
          <ListSingleProduct setData={setExamples} data={Examples}/>
        </main>
      </div>




    </>
  )
}

export default ProductDetail