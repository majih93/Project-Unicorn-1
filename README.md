# 패스트캠퍼스 스타트업 프론트엔드 과정 파이널 프로젝트 1조

## 멤버 및 맡은 역할

#### 안미영
- Ltv 계산 step1, 2, 3 UI 및 로직 구현

#### 심태균
- 랜딩 페이지 UI 구현

#### 마지혁
- 로그인 페이지 UI 및 회원가입/로그인 로직 구현

## 주제

- ltv 계산기

## 기술 스택

- ![title](https://img.shields.io/badge/-React-61DAFB?&logo=react&logoColor=white)
- ![title](https://img.shields.io/badge/-Typescript-3178C6?&logo=Typescript&logoColor=white)
- ![title](https://img.shields.io/badge/-styled_components-DB7093?&logo=styled-components&logoColor=white)

## 프로젝트 구조

```bash
├─assets
├─components
│ ├─Home ...// 홈페이지 관련 컴포넌트
│ ├─login ...// 로그인 페이지 관련 컴포넌트
│ └─LtvCalculation ...// 계산페이지 관련 컴포넌트
│
├─context
│ ├─firestore ... // db역할 해줄 firestotre 관련 코드
│ └─loginAuthentication ... // 로그인 인증에 필요한 코드
├─pages
│ ├─Home
│ ├─Login
│ └─LtvCalculation
│
├─store ... // recoil 전역 store
├─styles ... // styled component 글로벌 스타일
├─types ... // 타입 정의
└─utils ... // 유틸 함수 모음
```

## 실행 방법

1. Repository clone

> git clone https://github.com/majih93/Project-Unicorn-1

2. 필요한 모듈 설치

> npm install

3. Firebase 관련 .env 설정

4. 실행

> npm start


## 페이지 소개

### 1. 랜딩 페이지

디자인 팀이 제작해준 피그마 도안을 기반으로 홈페이지 역할을 해줄 랜딩 페이지를 구현하였습니다.

![랜딩](https://user-images.githubusercontent.com/87853486/182774542-5ce64edd-2fdd-4dc9-a312-396a87d89272.jpg)

### 2. 로그인 페이지

LTV 계산은 인증이 완료되었을 때만 접근이 가능하도록 제한하였고, 이를 위한 로그인 페이지를 구현하였습니다.

![로그인](https://user-images.githubusercontent.com/87853486/182774710-b11771ae-dc48-4648-97ee-af9f9b5019fd.jpg)

### 3. LTV 계산 페이지

#### Step1 - 사용자가 필요한 데이터가 담긴 CSV 파일을 업로드하는 단계입니다. 파일 첨부 영역을 클릭하거나, drag and drop을 통해서 파일을 첨부할 수 있도록 구현하였습니다. 또한 CSV 파일만을 첨부할 수 있도록 제한하였습니다.

![step1](https://user-images.githubusercontent.com/87853486/182774915-752b4905-e451-4fd7-b4b6-529fddd254cd.jpg)

![step1_2](https://user-images.githubusercontent.com/87853486/182774933-e2558897-ec80-4377-b1b1-6d5a953294fa.jpg)

#### Step2 - 기업이 필요한 데이터를 입력받는 단계입니다. 여러 정보를 입력받아 Recoil State 로 저장하고, 이를 DB에 전송하도록 구현하였습니다.

![step2](https://user-images.githubusercontent.com/87853486/182775153-d777d072-9856-4d0e-89fc-26e819de071d.jpg)


#### Step3 - 유저가 입력한 정보를 토대로 분석 결과를 보여주는 페이지입니다.

![step3](https://user-images.githubusercontent.com/87853486/182775302-a0c97f02-0301-47f5-969b-60a7dd88f76a.jpg)



