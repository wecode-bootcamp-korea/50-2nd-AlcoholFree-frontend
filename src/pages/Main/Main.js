import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';

const Main = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/productListData.json')
      .then((res) => res.json())
      .then((data) => {
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

  const CATEGORIES = [
    { id: 1, name: '와인', className: 'wineList' },
    { id: 2, name: '전통주', className: 'traditionalList' },
    { id: 3, name: '소주', className: 'sojuList' },
    { id: 4, name: '맥주', className: 'beerList' },
  ];

  return (
    <div className="Main">
      <div className="productListMain">
        <div className="productTabMain">
          <ul className="productListTab">
            {CATEGORIES.map((category) => (
              <li key={category.id} className={category.className}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="productListContainer">
          <div className="productListHeader">
            <div className="productHeaderWrapper">
              <h2 className="titleProductList">와인</h2>
            </div>
          </div>

          <div className="alcoholProductList">
            {productList.map((product) => (
              <Link
                to={`/detail/${product.id}`}
                className="productWrapper"
                key={product.id}
              >
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
              </Link>
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
