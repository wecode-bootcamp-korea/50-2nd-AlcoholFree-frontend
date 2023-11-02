const BASE_URL = 'http://10.58.52.52:8000';

const API = {
  SignUp: `${BASE_URL}/users/signup`,
  Login: `${BASE_URL}/users/login`,
  Main: `${BASE_URL}/products/main`,
  Detail: `${BASE_URL}/products/detail`,
  CostUser: `${BASE_URL}/products/costUser`,
  Cart: `${BASE_URL}/products/cart`,
  CostPay: `${BASE_URL}/products/costPay`,
  Products: `${BASE_URL}/products/`,
};

export default API;
