import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import URL from '../../config';
import './Cost.scss';

const Cost = () => {
  const [itemList, setItemList] = useState([]);
  const [user, setUser] = useState([]);
  const [checkInput, setCheckInput] = useState('');
  const [usePoint, setUsePoint] = useState();
  const navigate = useNavigate();

  // 숫자 쉼표 추가
  const numWithComma = (a) => {
    return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // 장바구니 불러오는 함수
  const getCartList = () => {
    fetch(`${URL.Cart}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItemList(data.result);
      });
  };

  // 장바구니 불러오기
  useEffect(() => {
    getCartList();
  }, []);

  // 회원정보 불러오기
  useEffect(() => {
    if (localStorage.length === 1) {
      fetch(`${URL.CostUser}`, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('TOKEN'),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data.message[0]);
        });
    } else {
      alert('로그인을 먼저 해주세요.');
      navigate('/login');
    }
  }, []);

  // 상품 개수 추가
  const plusCount = (id) => {
    const productQuantity = itemList.find((item) => item.id === id).quantity;
    const productCount = itemList.find((item) => item.id === id).count;

    if (productCount >= productQuantity)
      return alert('재고 수량이 부족합니다.');

    fetch(`${URL.Cart}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        count: productCount + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        getCartList();
      }
    });
  };

  // 상품 개수 감소
  const minusCount = (id) => {
    const productCount = itemList.find((item) => item.id === id).count;

    if (productCount <= 1) return alert('1개 이하로는 줄일 수 없습니다.');

    fetch(`${URL.Cart}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        count: productCount - 1,
      }),
    }).then((res) => {
      if (res.ok) {
        getCartList();
      }
    });
  };

  // 상품 삭제
  const deleteItem = (id) => {
    fetch(`${URL.Cart}/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
    }).then((res) => {
      if (res.ok) {
        getCartList();
      }
    });
  };

  // 배송 방법(Mock Data화)
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

  // 배송 방법 토글
  const checkDeliveryMethod = (name) => {
    setCheckInput(name);
  };

  // 주문한 상품 금액 총합
  const totalPriceCal = itemList
    .filter((data) => data.status === '미결제')
    .reduce((sum, array, index) => {
      sum += array.price * array.count;

      return sum;
    }, 0);

  // 포인트 사용
  const usingPoint = () => {
    if (user.point < totalPriceCal) return alert('포인트가 부족합니다.');
    setUsePoint(
      checkInput === '무료' ? totalPriceCal : totalPriceCal + checkInput,
    );
  };

  // 상품 주문
  const orderItem = () => {
    if (
      usePoint ===
        (checkInput === '무료' ? totalPriceCal : checkInput + totalPriceCal) &&
      itemList.length !== 0
    ) {
      fetch(`${URL.CostPay}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('TOKEN'),
        },
        body: JSON.stringify({
          totalPrice:
            checkInput === '무료' ? totalPriceCal : checkInput + totalPriceCal,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === 'order_success') {
            alert('결제가 완료되었습니다.');
            navigate('/');
          }
        });
    } else if (itemList.length === 0) {
      alert('장바구니에 상품을 담아주세요.');
    } else {
      alert('포인트를 확인해주세요.');
    }
  };

  return (
    <div className="cost">
      <div className="container">
        <div className="shopList">
          <div className="shopCategory">
            <div className="totalCount">
              전체
              {itemList.filter((data) => data.status === '미결제').length}개
            </div>
            <div className="itemName">상품명</div>
            <div className="itemPrice">판매가</div>
            <div className="itemCount">수량</div>
            <div className="itemTotalPrice">총 가격</div>
          </div>

          {itemList
            .filter((data) => data.status === '미결제')
            .map((data, index) => (
              <div className="shopItem" key={data.id}>
                <div className="shopID">{index + 1}</div>
                <div className="shopInfo">
                  <div className="shopImage">
                    <img src={data.productImg} alt="상품이미지" />
                  </div>
                  <div className="shopDetail">
                    <div className="shopName">{data.name}</div>
                    <div className="shopType">{data.avm}</div>
                    <div className="shopFrom">{data.origin}</div>
                  </div>
                </div>
                <div className="shopPrice">{numWithComma(data.price)}원</div>
                <div className="countControl">
                  <div className="shopCount">
                    <button onClick={() => plusCount(data.id)}>+</button>
                    {data.count}
                    <button onClick={() => minusCount(data.id)}>-</button>
                  </div>
                  <button onClick={() => deleteItem(data.id)}>삭제</button>
                </div>
                <div className="shopTotalPrice">
                  {numWithComma(data.price * data.count)}원
                </div>
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
                    checked={checkInput === method.deliverPrice}
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
                          : numWithComma(method.deliverPrice) + '원'}
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
          <div className="label">결제 방법</div>
          {/* <div className="coupon">
            <div className="discountType">쿠폰</div>
            <div className="couponDetail">
              <input className="useCoupon" type="text" />
              <button>최대 사용</button>
            </div>
          </div> */}
          <div className="point">
            <div className="discountType">포인트</div>
            <div className="pointDetail">
              <input
                className="costPoint"
                type="text"
                placeholder={'잔여 포인트 : ' + user.point + 'P'}
                value={usePoint}
              />
              <button onClick={usingPoint}>최대 사용</button>
            </div>
          </div>
        </div>

        <div className="order">
          <div className="label">최종 주문정보</div>
          <div className="orderPrice">
            <div className="price">즉시 구매가</div>
            <div className="price">{numWithComma(totalPriceCal)}원</div>
          </div>

          <div className="orderDelivery">
            <div className="price">배송비</div>
            <div className="price">
              {checkInput === '무료'
                ? checkInput
                : `${numWithComma(checkInput)}원`}
            </div>
          </div>

          {/* <div className="orderCoupon">
            <div className="price">쿠폰 사용</div>
            <div className="price">-</div>
          </div> */}

          <div className="orderPoint">
            <div className="price">포인트 사용</div>
            <div className="price">{usePoint > 0 ? usePoint + 'P' : '-'}</div>
          </div>
        </div>

        <div className="terms">
          <div className="finalPrice">
            <div className="totalPriceTab">총 결제금액</div>
            <div className="totalPrice">
              {checkInput === '무료'
                ? numWithComma(totalPriceCal)
                : numWithComma(checkInput + totalPriceCal)}
              원
            </div>
          </div>
          <button className="payBtn" onClick={orderItem}>
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cost;
