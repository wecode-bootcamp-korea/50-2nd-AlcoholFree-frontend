import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import URL from '../../config';
import './Main.scss';

const Main = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.length === 1) {
      fetch(`${URL.Main}`, {
        headers: {
          Authorization: localStorage.getItem('TOKEN'),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProductList(data);
        });
    } else {
      alert('로그인을 먼저 진행해주세요.');
      navigate('/login');
    }
  }, []);

  const numWithComma = (a) => {
    if (a === undefined) {
      return '';
    }
    return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const CATEGORIES = [
    { id: 1, name: '와인' },
    { id: 2, name: '전통주' },
    { id: 3, name: '소주' },
    { id: 4, name: '맥주' },
  ];
  return (
    <div className="Main">
      <div className="productListMain">
        <div className="productTabMain">
          <ul className="productListTab">
            {CATEGORIES.map((category) => (
              <li key={category.id} className="alcoholCategoryList">
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
            {productList.map((product) => {
              if (product.categoryId === 1) {
                return (
                  <Link
                    to={`/detail/${product.id}`}
                    className="productWrapper"
                    key={product.id}
                  >
                    <div className="imageWrapper">
                      <img
                        className="productImage"
                        src={product.productImg}
                        alt="wine list"
                      />
                    </div>
                    <div className="productDetailWrapper">
                      <div className="productName">{product.name}</div>
                      <div className="productDetail">{product.content}</div>
                      <div className="productPrice">
                        {numWithComma(product.price)}원
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>

        <div className="productListContainer">
          <div className="productListHeader">
            <div className="productHeaderWrapper">
              <h2 className="titleProductList">전통주</h2>
            </div>
          </div>

          <div className="alcoholProductList">
            {productList.map((product) => {
              if (product.categoryId === 2) {
                return (
                  <Link
                    to={`/detail/${product.id}`}
                    className="productWrapper"
                    key={product.id}
                  >
                    <div className="imageWrapper">
                      <img
                        className="productImage"
                        src={product.productImg}
                        alt="wine list"
                      />
                    </div>
                    <div className="productDetailWrapper">
                      <div className="productName">{product.name}</div>
                      <div className="productDetail">{product.content}</div>
                      <div className="productPrice">
                        {numWithComma(product.price)}원
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div className="productListContainer">
          <div className="productListHeader">
            <div className="productHeaderWrapper">
              <h2 className="titleProductList">소주</h2>
            </div>
          </div>

          <div className="alcoholProductList">
            {productList.map((product) => {
              if (product.categoryId === 3) {
                return (
                  <Link
                    to={`/detail/${product.id}`}
                    className="productWrapper"
                    key={product.id}
                  >
                    <div className="imageWrapper">
                      <img
                        className="productImage"
                        src={product.productImg}
                        alt="wine list"
                      />
                    </div>
                    <div className="productDetailWrapper">
                      <div className="productName">{product.name}</div>
                      <div className="productDetail">{product.content}</div>
                      <div className="productPrice">
                        {numWithComma(product.price)}원
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div className="productListContainer">
          <div className="productListHeader">
            <div className="productHeaderWrapper">
              <h2 className="titleProductList">맥주</h2>
            </div>
          </div>

          <div className="alcoholProductList">
            {productList.map((product) => {
              if (product.categoryId === 4) {
                return (
                  <Link
                    to={`/detail/${product.id}`}
                    className="productWrapper"
                    key={product.id}
                  >
                    <div className="imageWrapper">
                      <img
                        className="productImage"
                        src={product.productImg}
                        alt="wine list"
                      />
                    </div>
                    <div className="productDetailWrapper">
                      <div className="productName">{product.name}</div>
                      <div className="productDetail">{product.content}</div>
                      <div className="productPrice">
                        {numWithComma(product.price)}원
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
