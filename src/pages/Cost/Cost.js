import React, { useEffect, useState } from 'react';
import Example from './example.png';
import './Cost.scss';

const Cost = (item) => {
  const [itemList, setItemList] = useState([]);
  const [checkInput, setCheckInput] = useState([]);
  const [user, setUser] = useState([]);
  const { id, image, name, type, from, count, price, quantity } = item;

  // 장바구니 불러오기
  useEffect(() => {
    fetch(`http://10.58.52.52:8000/products/cart`, {
      method: 'GET',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJkbGdvYWxzMzM5NkBnbWFpbC5jb20iLCJpYXQiOjE2OTg2NTI3MDN9.vrPN3gvnepPB9LE0doiwuv5idJDvWQIK6jzuInjcBr0',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItemList(data.message);
      });
  }, []);

  // 회원정보 불러오기
  // useEffect(() => {
  //   fetch(`http://10.58.52.222:3000/products/cost`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJkbGdvYWxzMzM5NkBnbWFpbC5jb20iLCJpYXQiOjE2OTg2NTI3MDN9.vrPN3gvnepPB9LE0doiwuv5idJDvWQIK6jzuInjcBr0',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUser(data.message[0]);
  //     });
  // }, []);

  // 상품 개수 추가
  const plusQuantity = () => {
    fetch(`http://10.58.52.52:8000/products/cart/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJkbGdvYWxzMzM5NkBnbWFpbC5jb20iLCJpYXQiOjE2OTg2NTI3MDN9.vrPN3gvnepPB9LE0doiwuv5idJDvWQIK6jzuInjcBr0',
      },
      body: JSON.stringify({
        count: count + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        fetch('http://10.58.52.52:8000/products/cart', {
          method: 'GET',
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJkbGdvYWxzMzM5NkBnbWFpbC5jb20iLCJpYXQiOjE2OTg2NTI3MDN9.vrPN3gvnepPB9LE0doiwuv5idJDvWQIK6jzuInjcBr0',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setItemList(data.message);
          });
      }
    });
  };

  // 상품 개수 감소
  const minusQuantity = () => {
    if (count === 1) {
      alert('삭제합니다!');
      fetch(`http://10.58.52.52:8000/products/cart/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJkbGdvYWxzMzM5NkBnbWFpbC5jb20iLCJpYXQiOjE2OTg2NTI3MDN9.vrPN3gvnepPB9LE0doiwuv5idJDvWQIK6jzuInjcBr0',
        },
      });
    } else {
      fetch(`http://10.58.52.52:8000/products/cart/${id}`, {
        method: 'PATCH',
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJkbGdvYWxzMzM5NkBnbWFpbC5jb20iLCJpYXQiOjE2OTg2NTI3MDN9.vrPN3gvnepPB9LE0doiwuv5idJDvWQIK6jzuInjcBr0',
        },
        body: JSON.stringify({
          count: count - 1,
        }),
      }).then((res) => {
        if (res.ok) {
          fetch('http://10.58.52.52:8000/products/cart', {
            method: 'GET',
            headers: {
              Authorization:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJkbGdvYWxzMzM5NkBnbWFpbC5jb20iLCJpYXQiOjE2OTg2NTI3MDN9.vrPN3gvnepPB9LE0doiwuv5idJDvWQIK6jzuInjcBr0',
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setItemList(data.message);
            });
        }
      });
    }
  };

  // 상품 삭제
  const deleteItem = () => {
    fetch(`http://10.58.52.52:8000/products/cart/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJkbGdvYWxzMzM5NkBnbWFpbC5jb20iLCJpYXQiOjE2OTg2NTI3MDN9.vrPN3gvnepPB9LE0doiwuv5idJDvWQIK6jzuInjcBr0',
      },
    });
  };

  // const orderItem = () => {
  //   fetch(`api주소/carts/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //     },
  //   });

  //   fetch(`api주소/carts/${id}`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //     },
  //   });

  //   fetch(`api주소/`)
  // };

  // 유저 mock Data
  // const user = {
  //   name: '홍길동',
  //   mobile: '010-1234-5678',
  //   address: '서울특별시',
  // };

  // 상품 가격 합산
  // const getTotalPrice = (itemList) => {
  //   let sum = 0;
  //   for (let i = 0; i < itemList.length; i++) {
  //     sum += itemList[0].price * itemList[0].count;
  //   }

  //   return sum;
  // };

  // 배송 방법
  const deliveryMethods = [
    {
      name: '일반 배송',
      deliverPrice: 3000,
      deliverPeriod: '3~5일 내 도착 예정',
    },
    {
      name: '퀵 배송',
      deliverPrice: 30000,
      deliverPeriod: '2~3시간 내 도착 예정',
    },
    {
      name: '픽업',
      deliverPrice: '무료',
      deliverPeriod: '주문 직후 픽업 가능',
    },
  ];

  const checkDeliveryMethod = (name) => {
    setCheckInput(name);
  };

  return (
    <div className="cost">
      <div className="container">
        <div className="shopList">
          <div className="shopCategory">
            <div className="totalCount">전체 {itemList.length}개</div>
            <div className="itemName">상품명</div>
            <div className="itemPrice">판매가</div>
            <div className="itemCount">수량</div>
            <div className="itemTotalPrice">총 가격</div>
          </div>

          {itemList.map((data) => (
            <div className="shopItem" key={data.id}>
              <div className="shopID">{data.id}</div>
              <div className="shopInfo">
                <div className="shopImage">
                  <img src={data.productImg} alt="상품이미지" />
                </div>
                <div className="shopDetail">
                  <div className="shopName">{data.name}</div>
                  <div className="shopType">{data.type}</div>
                  <div className="shopFrom">{data.from}</div>
                </div>
              </div>
              <div className="shopPrice">{data.price}원</div>
              <div className="countControl">
                <div className="shopCount">
                  <button onClick={plusQuantity}>+</button>
                  {data.count}
                  <button onClick={minusQuantity}>-</button>
                </div>
                <button onClick={deleteItem}>삭제</button>
              </div>
              <div className="shopTotalPrice">{data.price * data.count}원</div>
            </div>
          ))}
        </div>

        <div className="deliver">
          <div className="deliverAddress">
            <div className="label">배송 주소</div>
            <div className="deliverDetail">
              <div className="deliverCategory">
                <div className="deliverInfo">받는 분</div>
                <div className="deliverInfo">연락처</div>
                <div className="deliverInfo">배송 주소</div>
              </div>
              <div className="customerCategory">
                <div className="customerInfo">{user.name}</div>
                <div className="customerInfo">{user.phoneNumber}</div>
                <div className="cusomerInfo">{user.address}</div>
              </div>
            </div>
          </div>
          <div className="deliverMethod">
            <div className="label">배송 방법</div>
            <div className="deliverList">
              {deliveryMethods.map((method) => (
                <div key={method.name} className="whatType">
                  <input
                    type="radio"
                    className="deliverMethodType"
                    value={method.name}
                    checked={checkInput === `${method.deliverPrice}`}
                    onChange={checkDeliveryMethod}
                    id={method.name}
                  />
                  <div
                    className="radioDiv"
                    for={method.name}
                    onClick={() => checkDeliveryMethod(method.deliverPrice)}
                  >
                    <div className="type">
                      <div className="deliverTitle">{method.name}</div>
                      <div className="deliverPrice">
                        {method.deliverPrice === '무료'
                          ? method.deliverPrice
                          : method.deliverPrice + '원'}
                      </div>
                    </div>
                    <div className="typeDetail">{method.deliverPeriod}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="discount">
          <div className="label">할인 혜택</div>
          <div className="coupon">
            <div className="discountType">쿠폰</div>
            <div className="couponDetail">
              <input className="useCoupon" type="text" />
              <button>최대 사용</button>
            </div>
          </div>
          <div className="point">
            <div className="discountType">포인트</div>
            <div className="pointDetail">
              <input className="costPoint" type="text" />
              <button>최대 사용</button>
            </div>
          </div>
        </div>

        <div className="payment">
          <div className="label">결제 방법</div>
        </div>

        <div className="order">
          <div className="label">최종 주문정보</div>
          <div className="orderPrice">
            <div className="price">즉시 구매가</div>
            <div className="price">원</div>
          </div>

          <div className="orderDelivery">
            <div className="price">배송비</div>
            <div className="price">
              {checkInput === '무료' ? checkInput : `${checkInput}원`}
            </div>
          </div>

          <div className="orderCoupon">
            <div className="price">쿠폰 사용</div>
            <div className="price">-</div>
          </div>

          <div className="orderPoint">
            <div className="price">포인트 사용</div>
            <div className="price">-</div>
          </div>
        </div>

        <div className="terms">
          <div className="finalPrice">
            <div className="totalPriceTab">총 결제금액</div>
            <div className="totalPrice">280,500원</div>
          </div>
          <button className="payBtn">결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cost;
