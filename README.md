# 01-vue-simple

가볍게 화면 구현

## 환경

Node.js 20.13.1

## 설치

npm install -g @vue/cli
(vue create 01-vue-simple)

npm install axios

## 실행

npm run serve

## 구성

- components
  - MainPage : 청약진행
    - Dummycomponent : 화면 구성용 컴포넌트
    - LoadingComponent : 로딩 중 표시하는 컴포넌트
    - CustomerList : 고객 리스트
    - AiProcess : AI 청약프로세스 단계 안내
    - ProductRecommendations : 상품검색으로 추천된 상품들을 표시
      - ProductCard : 각각의 상품을 card의 형태로 표시
    - ProductDetails : 맞춤 청약 내용물 확인 및 다음 화면으로 넘어갈지를 확인
- assets
  - customer : customerid와 연동 이미지
  - 기타 : button, dummy, loading

## 요구/구현사항

- 고객 리스트
  - 선택시 노랗게 변함
  - 고객 이미지는 customer 폴더에 customer의 ID이름.png를 참조
  - 우측의 버튼을 선택시 AI 청약프로세스가 시작 dummyComponent도 현재 단계에 맞는 컴포넌트로 변경됨
  - 고객 선택시 AI 청약프로세스가 단계에 상관없이 취소됨
- AI 청약프로세스 단계 안내
  - STEP01 상품검색, STEP02 AI 가입설계, STEP03 맞춤청약의 세 단계
  - 현재 단계에 맞춰서 노랗게 표시
  - STEP01 상품검색
    - AI 청약 프로세스 진행시 첫 단계
    - API호출로 반환받은 상품들을 3열로 표시
    - 상품은 [상품플랜, 상품명, 상품특성]로 구성
    - 상품들 밑에 취소 버튼과 설계 진행 버튼이 있음
      - 취소 버튼 : 청약프로세스 단계 전 단계로 돌아감
      - 설계 진행 : STEP02 AI 가입설계로 넘어감
  - STEP02 AI 가입설계
    - API 호출
      - 반환 : 고객이름, 상품id, 상품플랜, 상품명, 상품특성, 분류, 보험내용, 신규담보가입, 보험료, 상품상세목록
        - 상품상세 : 담보id, 담보명, 가입금액, 납기, 만기, 보험료
      - 호출 중 LoadingComponent2를 표시
      - 호출 종료시 LoadingComponent2를 ProductDetail로 바꾸면서 STEP03 맞춤청약로 넘어감
  - STEP03 맞춤청약
    - STEP02에서 호출한 API의 결과물 표시하고 다음 화면으로 넘어갈지를 확인하는 화면
    - 변수 중 고객명, 상품명, 분류, 보험내용, 신규다입, 보험료를 표시
    - 취소, 상품선택, 청약진행 버튼이 있음
      - 취소 : AI 청약프로세스가 취소됨
      - 상품선택 : 설계진행 버튼을 누르기 전 단계인 STEP02 상태로 돌아감
      - 청약진행 : API를 호출해서 받아온것을 완전히 새로운 화면에서 표시해주게 routing

## Reference

- OO보험사 상품공시실
- iconfinder
