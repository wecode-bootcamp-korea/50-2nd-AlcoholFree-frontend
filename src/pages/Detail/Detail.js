import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.scss';

const Detail = () => {
  const params = useParams();
  const productId = params.id;
  const [productDetail, setProductDetail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    fetch(`/data/productListData.json`)
      .then((res) => res.json())
      .then((data) => {
        const product = data.productList.find(
          (data) => data.id === Number(productId),
        );
        setProductDetail(product);
      });
  }, [productId]);

  return (
    <div className="container">
      {productDetail && (
        <div className="productContainer">
          <div className="imageContainer">
            <img
              className="productDetailImg"
              src={productDetail.productImg}
              alt={productDetail.name}
            />
          </div>
          <div className="columnLeft">
            <div className="columnContainer">
              <div className="priceInfo">구매가</div>
              <h1 className="productPriceDetail">{productDetail.price}</h1>
              <div className="nameContentWrapper">
                <h1 className="productNameDetail">{productDetail.name}</h1>
                <h2 className="productContentDetail">
                  {productDetail.content}
                </h2>
                <h2 className="additionalDetail">
                  {productDetail.avm} | {productDetail.origin}
                </h2>
              </div>
              <div className="productFigure">
                <button className="decreaseButton" onClick={handleDecrease}>
                  -
                </button>
                <span className="quantityValue">{quantity}</span>
                <button className="increaseButton" onClick={handleIncrease}>
                  +
                </button>
              </div>

              <div className="buttonWrapper">
                <button className="purchaseButton">장바구니에 담기</button>

                <button className="bookmarkButton">관심상품</button>
              </div>
            </div>
            <hr />
            <div className="shipmentInfoContainer">
              <div className="shipmentInfo">배송 정보</div>
              <div className="deliveryWrapper">
                <p className="deliveryTitle">
                  <span className="deliveryOption">택배 발송</span>
                  <span className="deliveryPrice">3,000원</span>
                </p>
                <p className="deliveryDetail">3-5일 내 도착 예정</p>
              </div>
              <div className="quickWrapper">
                <p className="deliveryTitle">
                  <span className="deliveryQuick">퀵 발송</span>
                  <span className="deliveryPrice">30,000원</span>
                </p>
                <p className="deliveryDetail">2-3시간 내 도착 예정</p>
              </div>
              <div className="pickUpWrapper">
                <div className="deliveryTitle">
                  <span className="pickUp">픽업</span>
                  <span className="deliveryPrice">무료</span>
                </div>

                <div className="deliveryDetail">주문 직후 픽업 가능</div>
              </div>
            </div>

            {/* <div className="brandInfoWrapper"> */}
            {/* <img></img> */}
            {/* <p className="brandInfoOrigin">WonSoju</p> */}
            {/* <p className="brandInfoKor">원소주</p> */}
            {/* </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
