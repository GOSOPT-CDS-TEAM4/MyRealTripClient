<div align="center">

# 마이 리얼 트립
![mrt](https://github.com/GOSOPT-CDS-TEAM4/MyRealTripClient/assets/65286685/3136f757-1227-43d4-b338-c77b73370d15)

<aside>
🛫 해외여행을 가는 한국 여행객과 해외에 체류 중인 가이드를 연결해주는 온라인 중개 플랫폼

</aside>
</div>


## 🙋🏻‍♀️ 팀원 소개 & 역할 분담
<div align="center">
	<table>
<th>팀원</th>
  <th>오형근  <a href="https://github.com/Geun-Oh"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white&link=https://github.com/Geun-Oh"/></a>  </th>
	<th>권혜인 <a href="https://github.com/hae2ni"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white&link=https://github.com/hae2ni"/></a>  </th>
  <th> 권은빈 <a href="https://github.com/eunbeann"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white&link=[https://github.com/Yeonseo-Jo](https://github.com/eunbeann)"/></a>  </th>
	<tr>
	<td> 팀원 소개 </td>
		<td> <img width="230" alt="image" src="https://github.com/Geun-Oh.png">
 </td>
		<td> <img width="230" alt="image" src="https://github.com/SopkathonTeam2/Client/assets/77691829/d3a87ab2-ad16-47e8-a316-6dbdd6981406"></td>  
		<td><img width="230" height="270" alt="image" src="https://github.com/eunbeann.png"></td>
	</tr>
	<tr>
        <td> <b>View</b> </td>
	<td>
		<ul>
			<li> 투어 페이지 </li> 
			<li> 랜딩 페이지 </li>
		</ul>
	</td>
	<td>
		<ul>
			<li> 디테일 투어 페이지 </li>
		</ul>
	</td>
	<td>
		<ul>
            <li> 투어리스트 페이지 </li>
		</ul>
	</tr>
		<tr>
	<td> 담당 API </td>
	<td>
		<ul>
		    <li> getRandomTourList GET</li>
            <li> createScrap POST </li>
            <li> deleteScrap DELETE </li>
		</ul>
	</td>
	<td>
		<ul>
			<li> getTourDetail GET</li>
            <li> google Api GET</li>
            <li> createScrap POST </li>
            <li> deleteScrap DELETE </li>
		</ul>
	</td>
	<td>
		<ul>
            <li> getFilteredTourList GET </li>
            <li> getBestTourList GET </li>
	        <li> createScrap POST </li>
            <li> deleteScrap DELETE </li>
		</ul>
	</tr>
	</table>
</div>

<br/>

## ⚙️ 핵심 기능
<h3>투어 페이지</h3>
<ul>
    <li>각 상품 정보 및 베스트 투어 상품 렌더링</li>
</ul>

<h3>랜딩 페이지</h3>
<ul>
    <li>상품 정보 렌더링 및 스크랩</li>
    <li>스크랩 취소 기능</li>
</ul>


<h3>투어 리스트 페이지</h3>
<ul>
    <li>투어 데이터 조건에 따라 필터링</li>
</ul>


<h3>디테일 투어 페이지</h3>
<ul>
    <li>디테일 투어 렌더링 및 스크랩</li>
    <li>구글 맵 연동</li>
</ul>

## 🛠 기술 스택
<div align="center">

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                |
| Programming Language | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)                                                                                             |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |
| State Management     | ![State Management](https://img.shields.io/badge/recoil-f26b00?style=for-the-badge&logo=Recoil)                                                                                                                   |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |
</div>


## 📄 컨벤션
### ✨ Git 컨벤션
#### 브랜치 전략

    <ul>
        <li>main(master) : 최종 배포 브랜치</li>
        <li>dev : 이슈 단위 개발을 마치고 머지하는 브랜치</li>      
        <li>feature-{페이지} : 각자 기능 개발하는 브랜치</li>
    </ul>


#### ✍🏻 커밋 컨벤션
<b>gitmoji를 활용했습니당~!</b>

| TagName | Description |
| --- | --- |
| ✨ [Feat] | 새로운 기능 추가, 구현 |
| 🎉 [Begin] |  초기 세팅 (init으로 해도 돼!) |
| 💄 [Style] | UI, 스타일 관련 파일 추가 및 수정 |
| 💬 [Text] | 텍스트 또는 리터럴 추가 및 수정 |
| 🍱 [Asset] | asset 파일(이미지, 아이콘 등) 추가 |
| 📝 [Docs] | 문서 파일 추가 및 수정 (Readme 등) |
| ♿️  [Access] |  웹 접근성 향상을 위한 코드 추가 및 수정 |
| ✏️ [typo] |  단순 오타 수정 |
| 🐛 [Fix] |  버그 수정 |
| 🚚 [Move] | 파일, 경로, route를 옮기거나 이름 변경 |
| ♻️ [Refactor] | 코드 리팩토링 |
| 🔥 [Remove] |  의미없는 파일, 코드 삭제 |
| 📦 [Pack] | Package 추가 등 |


#### 📁 폴더 구조 
```
|-- 📁 node_modules
|-- 📁 public
	|-- 📁 asset
|-- 📁 src
	|-- 📁 components
	|-- 📁 pages // 컴포넌트 쌓아 만든 실제 페이지
	|-- 📁 styles
	|-- 📁 utils // 너무 자주 쓰여 함수화 필요하다! 싶은 친구들~
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc
|-- README.md
|-- package.json
|-- yarn.lock
```

```
✅ components

|-- 📁 common 👈 footer, header 등 
|-- 📁 layout // 레이아웃 공통된 거! 
	|-- 📁 atoms // Text, Flex, Button 등의 기본이 되는 친구들
|-- 📁 DetailPage ... //각 페이지별 section 요소 정리   
```

```
✅ DetailPage
|-- 📁 DetailTourSection 👈 각 섹션별 폴더
	|--DetailTourSection.jsx
	|--index.js 👈 import를 깔끔하게 하기 위한 설정
```

```
✅ styles
|-- globalStyle.js
|-- themem.js
```
