# Alcohol Free
나날이 성장 하고 있는 주류 시장은 온라인에서의 판매가 제한적이기 때문에, 판매가 아닌 판매 중계를 하는 사이트를 만들어 보고자 기획하게 되었음

## Project Overview
- 프로젝트 명 : Alcohol Free
- 프로젝트 목표 : 주류 판매와 관련된 다양한 제품을 소비자에게 판매 중계
- 기간 : 2023/10/23 ~ 2023/11/03(2주)

## Contributors
### [FE](https://github.com/wecode-bootcamp-korea/50-2nd-AlcoholFree-frontend)
- [신희현](http://github.com/hxxhyun) : 각 페이지의 헤더, 로그인, 회원가입, 장바구니 및 결제
- [이새미](https://github.com/summersweetpotato) : 상품 리스트, 상세 페이지

### [BE](https://github.com/wecode-bootcamp-korea/50-2nd-AlcoholFree-backend)
- [이해민](https://github.com/tivldjtm11) : 회원, 결제, RDS
- [이재현](https://github.com/LeeJaeHyean) : 주문
- [김문영](https://github.com/kimmunyeong) : 상품 리스트
- [정원규](https://github.com/wonkyujeong) : 상세 페이지

## Tech Stack
- React
- HTML5
- CSS3
- Javascript(ES6)
- GitHub
- Trello
- Slack
- [Notion](https://wecode.notion.site/A-Alcohol-Free-96e03f18bf50407a8f5167efc37eeb74)

## Features
- 회원가입 : 이메일 유효성 검사 ('@', '.' 포함), 비밀번호 확인 검사를 통해 회원가입 가능 여부 판단 및 주소 API를 통해 용이한 주소 입력
- 로그인 및 로그아웃 : 이메일 유효성 검사를 통해 버튼 활성화, 로컬 스토리지에 저장한 토큰을 통해 로그인 및 로그아웃 여부 확인 가능
- 상품 리스트 : 토큰이 저장되어 있으면(로그인이 되어있을 경우) 상품 리스트 시각화 구현
- 상세 페이지 : 각 상품의 특징을 상세하게 볼 수 있으며 수량을 정하여 장바구니 담기 가능
- 장바구니 및 결제 : 상세 페이지에서 담은 상품들을 유저에게 보여주며 수량 변경 및 삭제 가능, 토큰을 통해 유저 기본 정보 시각화, 배송 방법에 따른 금액 변경과 유저가 보유하고 있는 포인트를 통한 결제

## Preview
- 로그인 페이지
![스크린샷 2023-11-03 오전 11 23 31(2)](https://github.com/wecode-bootcamp-korea/50-2nd-AlcoholFree-frontend/assets/96459468/dd137135-8eae-4a87-8652-fc3eda025dc0)

- 회원가입 페이지
![image](https://github.com/wecode-bootcamp-korea/50-2nd-AlcoholFree-frontend/assets/96459468/663c9983-b0ca-42fa-93ed-09896f0371e3)

- 리스트 페이지
![image](https://github.com/wecode-bootcamp-korea/50-2nd-AlcoholFree-frontend/assets/96459468/f0821e9c-6272-47f1-8f2a-b1f1d7f0c965)

- 상세 페이지
![image](https://github.com/wecode-bootcamp-korea/50-2nd-AlcoholFree-frontend/assets/96459468/4626b4a1-a891-4c7e-aab4-3ca36b5e18fe)

- 장바구니 및 결제
![image](https://github.com/wecode-bootcamp-korea/50-2nd-AlcoholFree-frontend/assets/96459468/e1bd02a4-4128-4d26-a9ab-2e46e4500adb)

## User Scnarios
### 1. 회원가입 및 로그인
1. Alcohol Free 웹사이트 접속
2. 회원가입
3. 로그인

### 2. 상품 주문
1. 로그인 시 이동하는 상품 리스트 페이지 이동
2. 원하는 제품 클릭
3. 상세 페이지에서 주문할 수량 변경
4. '장바구니 담기' 버튼 클릭

### 3. 상품 결제
1. 원하는 제품들을 담고 헤더부분에 'COST & PAY' 버튼 클릭으로 장바구니 및 결제 페이지 이동
2. 장바구니에서 상품 개수 변경 및 삭제 진행
3. 원하는 배송 방법 체크
4. 포인트 탭에서 '모두 사용' 클릭으로 주문 금액에 맞는 포인트 사용
5. '결제' 버튼을 통해 최종 주문

## 프로젝트 설치 및 실행
1. 리포지토리 클론
```
git clone https://github.com/wecode-bootcamp-korea/50-2nd-AlcoholFree-frontend/
```

2. 의존성 패키지 설치
```
npm install
```

3. 프로젝트 실행
```
npm start
```
