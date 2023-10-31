import React from 'react';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import './Main.scss';

const Main = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/productListData.json')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProductList(data.productList);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`http://10.58.52.198:8000/products/main/`, {
  //     headers: {
  //       token:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJkbGdvYWxzMzM5NkBnbWFpbC5jb20iLCJpYXQiOjE2OTg3MjUzOTZ9.3ss1Gd6bBClErKuI8rReyorf0EiM-PxILW-p0_KLMA4',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProductList(data);
  //     });
  // }, []);

  return (
    <div className="Main">
      <div className="productListMain">
        <div className="productTabMain">
          <ul className="productListTab">
            <li className="wineList">와인</li>
            <li className="traditionalList">전통주</li>
            <li className="whiskeyList">위스키</li>
            <li className="sojuList">소주</li>
            <li className="beerList">맥주</li>
          </ul>
        </div>
        <div className="productListContainer">
          <div className="productListHeader">
            <div className="productHeaderWrapper">
              <h2 className="titleProductList">와인</h2>
            </div>
          </div>

          <div className="alcoholProductList">
            {productList &&
              productList.map((product) => (
                <div className="productWrapper" key={product.id}>
                  <img
                    className="productImage"
                    src={product.productImg}
                    alt="wine list"
                  />
                  <div className="productDetailWrapper">
                    <div className="productName">{product.name}</div>
                    <div className="productDetail">{product.content}</div>
                    <div className="productPrice">{product.price}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="productListContainer">
          <div className="productListHeader">
            <div className="productHeaderWrapper">
              <h2 className="titleProductList">전통주</h2>
            </div>
          </div>

          <div className="alcoholProductList">
            {productList &&
              productList.map((product) => (
                <div className="productWrapper" key={product.id}>
                  <img
                    className="productImage"
                    src={product.productImg}
                    alt="second product"
                  />
                  <div className="productName">{product.name}</div>
                  <div className="productDetail">{product.content}</div>
                  <div className="productPrice">{product.price}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
