![create1](https://user-images.githubusercontent.com/115705457/217782019-b59d5c6b-67dc-41e8-8322-ba87cdbd7a8b.gif)
![update](https://user-images.githubusercontent.com/115705457/217781614-cb249d04-33c4-4e1f-9ded-e60dfd2c5f82.gif)
![delete](https://user-images.githubusercontent.com/115705457/217781638-71c06a86-d3cc-462c-b2ff-de8eb82202cc.gif)


# TODO List 만들기

- [x] 컴포넌트 만들기
- [x] styled component 를 이용한 css적용
- [x] 할일 생성하기(Create)
- [x] 한일/할일 체크여부 변경하기 (Update) ️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽ 01/23/2023
- [x] 텍스트 클릭시 모달창 열수있게 구현
- [x] 모달창을 열었을 때 클릭한 할일을 불러오도록 하기 ️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️01/24/2023
- [x] 할일 변경후 수정 클릭시 리스트에 반영시키기 (Update)
- [x] 할일 삭제 구현하기 (Delete)
- [x] 폰트 크기 및 여백 레이아웃 디테일 조정
- [x] 모달 x 버튼 클릭 시 모달 창닫기 구현 ️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️️◽️◽️◽️◽️◽02/04/2023
- [x] json-server 임의백엔드 세팅
- [x] 하드코딩 데이터를 fetch로 가져오기
- [x] CORS 오류 - PROXY 로 설정하여 우회하기
- [x] 할일생성(Create) -> POST로 구현하기 ️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️️◽️◽️◽️◽️◽️◽02/07/2023
- [x] 체크여부 수정하기 -> PATCH 구현
- [x] 할일수정하기 -> PATCH 구현2
- [x] 할일 삭제하기 -> DELETE 구현 ️◽️◽️◽️◽️◽️◽️◽️◽️◽️◽️️◽️◽️◽️◽️◽️◽️️◽️◽️◽️◽️◽️◽️️◽️◽️◽02/08/2023

---

# Error Handling

- [x] json-server설치 및 fetch 진행시 CORS 오류발생
  - 🪲 webpack Proxy 사용하여 문제해결
- [x] 체크박스 업데이트시 리렌더링 안되는 이슈발생
- - 🪲 todos 상태값 useEffect dependency에 추가 - 해결 실패
    - 무한 리렌더링 + 서버로 무한 GET 요청이 들어감
- - 🪲 refresh 상태만들고, check상태값 서버로 PATCH 성공시 setRefesh 상태를 반전, useEffect의 dependency에 refresh 상태값을 담아 해결
