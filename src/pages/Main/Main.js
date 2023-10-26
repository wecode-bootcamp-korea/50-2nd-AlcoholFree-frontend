import React from 'react';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import './Main.scss';

const Main = () => {
  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   fetch('http://10.58.52.76:8000/product/main')
  // 문영님 컴퓨터 api
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProductList(data.result);
  //     });
  // }, []);

  return (
    <div className="Main">
      <div className="prductList">
        <div className="firstProductListContainer">
          <div className="productListHeader">
            <div className="productHeaderWrapper">
              <h2 className="titleProductList">와인</h2>
            </div>
          </div>

          <div classsName="firstProductsList">
            {/* 컴포넌트화  */}
            <div className="productList">
              {/* {productList && */}
              {PRODUCT_LIST.map((product) => (
                <div className="productWrapper" key={product.id}>
                  <img
                    className="productImage"
                    src={product.productImg}
                    alt="first product"
                  />
                  <div className="productName">{product.name}</div>
                  <div className="productDetail">{product.content}</div>
                  <div className="productPrice">{product.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="secondProductListContainer">
          <div className="productListHeader">
            <div className="productHeaderWrapper">
              <h2 className="titleProductList">전통주</h2>
            </div>
          </div>
          <div classsName="secondProductsList">
            {/* 컴포넌트화  */}
            <div className="productList">
              {/* {productList && */}
              {PRODUCT_LIST.map((product) => (
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
              ;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

// mock data

const PRODUCT_LIST = [
  {
    id: 1,
    productImg: './images/product_img_01.webp',
    name: '상품 01',
    content: '첫번째 상품입니다.',
    productDiscout: '0%',
    price: '300,000원',
    priceOption: '구매가',
    origin: '스페인',
  },

  {
    id: 2,
    productImg: './images/product_img_02.webp',
    name: '상품 02',
    content: '두번째 상품입니다.',
    productDiscout: '0%',
    price: '100,000원',
    priceOption: '구매가',
    origin: '독일',
  },

  {
    id: 3,
    productImg: './images/product_img_01.webp',
    name: '상품 03',
    content: '세번째 상품입니다.',
    productDiscout: '10%',
    price: '400,000원',
    priceOption: '구매가',
    origin: '프랑스',
  },
  {
    id: 4,
    productImg: './images/product_img_02.webp',
    name: '상품 04',
    content: '네번째 상품입니다.',
    productDiscout: '40%',
    price: '200,000원',
    priceOption: '구매가',
    origin: '호주',
  },
  {
    id: 5,
    productImg: './images/product_img_01.webp',
    name: '상품 05',
    content: '다섯번째 상품입니다.',
    productDiscout: '15%',
    price: '300,000원',
    priceOption: '구매가',
    origin: '한국',
  },
  {
    id: 6,
    productImg: './images/product_img_01.webp',
    name: '상품 06',
    content: '여섯번째 상품입니다.',
    productDiscout: '25%',
    price: '200,000원',
    priceOption: '구매가',
    origin: '한국',
  },
  {
    id: 6,
    productImg: './images/product_img_01.webp',
    name: '상품 06',
    content: '여섯번째 상품입니다.',
    productDiscout: '25%',
    price: '200,000원',
    priceOption: '구매가',
    origin: '한국',
  },
  {
    id: 7,
    productImg: './images/product_img_01.webp',
    name: '상품 07',
    content: '일곱번째 상품입니다.',
    productDiscout: '25%',
    price: '200,000원',
    priceOption: '구매가',
    origin: '한국',
  },
  {
    id: 8,
    productImg: './images/product_img_01.webp',
    name: '상품 08',
    content: '여덟번째 상품입니다.',
    productDiscout: '25%',
    price: '200,000원',
    priceOption: '구매가',
    origin: '한국',
  },
];
