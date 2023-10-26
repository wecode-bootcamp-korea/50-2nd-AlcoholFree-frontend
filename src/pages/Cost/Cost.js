import React from 'react';
import './Cost.scss';

const Cost = () => {
  return (
    <div className="cost">
      <div className="container">
        <div className="shopList">
          <div className="shopItem">
            <div className="itemProfile">
              <div className="itemImage">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQMECAL/xAA1EAABBAECBAMFBQkAAAAAAAABAAIDBAURIQYSMUETYXEHIjJRgUJykbHBFCM1Q1KSocLR/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAQDBQIB/8QAIhEAAwACAQMFAQAAAAAAAAAAAAECAxEEEhMxIVFhcaFB/9oADAMBAAIRAxEAPwC8UREAREQGHdNuq822nyP5h4EEr69mRsgfMxjS7U68pBB0+q9JFVthmiXBPvuaNbGQneNflzn/AIpeTk7aT0T5p20az2EGQ3OIeZkbW88Xwycx10d216efqrdUC9nDhHmeJK40H7+KUD7zNP8AVT1bYq6oTNMT3IREWhoEREAREQBERAcNyQQ1ZpT0ZG5x+gVSY6NknCmMhdJO1oeX6MsSN3I8j5qw+OstXwvCeTuWpAwCu9jB3c9wIa0eZJVOcOcRwZCtToQRStew/E8jl6eSi5k00ukl5Da1osDgSCCnxNcZAHfv6jXOLpHPJ5Xbbkn+pWCqg4W4sxsXtAr4+V0kMskT64fI0BjnnQgA699Ntuqt9a8RUsS6vJrh30eoREVBqEREAREQBYKyhQFE8YXb3HufdBVYTjaUjmQMJ2eQdDIfM9vkPUrl4ew0eDycZyNZ+g7R6LPsqAcyEHqdD/gKZ57G2pcmf2apM+MfaawkfiuZlu63o5yl2u4/OzXZXEYjJkyioHdwXsHMD8wVK+DsxJfgnp23l9umWh7z/MYdeVx89iD6a91rK+Ltsi0NaQeXKuTg+laq57JSWK8kUckMYa5zdA4hzun4rxw3kWXT3plE9SpfJMkRF1ikIiIAiIgCwVlYKAi/A/D9Lhrh+ozlYLBhYbE7urnkDXfsNegXb4vz54exzLgrSztEjTLyROc2OEOHiOJGwIbqRqRqRpuo3xZcnsMrY6udImtb4jR9s8oO/kNR9fRcsdeTN4eSnlmSW30oXyw1y48ll3L7nPpu4tPTfqQeoBFD4rnCsn4QYubD5DwJei/vz7G+x3FuMvZibEiTwrjOQshk2e9romya8vVugdpv3C28MZZM4uA94E7eqg/CmVGGxuUyObEsUGld7rE1aWOaeXwmsLOV/vOcORg2G5JPdT0bvb6H9FOXn2iIgCIiAIiIAiIgIjYw0zrTbtePxWyxs5mhwBaQAO/bZcWYwl+bESBg5XyyRxvgbY8F0kXMC5niD4S7YbdtdNyt7jbwfTiJhc3RunUdvXRdiw2rcjaLHRrublLvIjt6rXv1cKX4JZ4uOLdz9ld5PF5ClWntZJ8M88M9VodK1r2vf+zhjnNa87kuJaPdc49hqrBwNeOriaNeGPw2R1w0R8oHJ020Gw06aDZdebDYawzwrFeORoe1wDifdcDsR8vp8z812K0taHIR42q1kYr1ebwowAGNJAaAB0+ErJlKfubFERD6EREAREQBEXTvWJIWEs01HkgPPPCXFWcYyASZi89vK3Z9hzu3mpsOJMm+z/EJw3bYPVVMkNbMXa8IDY4bMkbNvstcQPyW6GQsQkFhGpHcKHPNPwzlurm2tloR5m6+Pe7MT99c/AEjpeJcs6Rxc51eMkl2pPvOVXtz95jfdLP7VMPY3kbFu1mLMzgZHOjj2GwA5j+v5LHi4bnLumbxVXkRcCL4icXDdfa6haEREB//2Q=="
                  alt="상품 이미지"
                />
              </div>
              <div className="itemDetail">
                <div className="itemName">상품 이름</div>
                <div className="itemCategory">주종</div>
                <div className="itemFrom">원산지</div>
                <div className="itemOrder">
                  <div className="itemCount">상품 개수</div>
                  <div className="itemPrice">상품 가격</div>
                </div>
              </div>
            </div>
            <div className="itemTotalPrice">상품 총 가격</div>
          </div>
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
                <div className="customerInfo">홍길동</div>
                <div className="customerInfo">010-0000-0000</div>
                <div className="cusomerInfo">서울특별시</div>
              </div>
            </div>
          </div>
          <div className="deliverMethod">
            <div className="label">배송 방법</div>
            <div className="deliverList">
              <div>
                <input type="radio" />
                <label>일반 배송</label>
              </div>
              <div>
                <input type="radio" />
                <label>퀵 배송</label>
              </div>
              <div>
                <input type="radio" />
                <label>픽업 배송</label>
              </div>
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
            <div className="price">260,000원</div>
          </div>

          <div className="orderDelivery">
            <div className="price">배송비</div>
            <div className="price">2,500원</div>
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
