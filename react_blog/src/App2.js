/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let cname = "black-nav";

  let [글제목, 글제목변경] = useState(['남자 코트 추천','맛집 추천','파이썬독학']);
  let [따봉,따봉변경]= useState(0);

  let [modal, setModal] = useState(false);

  function 함수(){
    따봉변경(따봉+1);
  }

  function changeTit(){
    let copy = [...글제목]; // copy 문법
    copy[1] = '하노이 맛집 추천';
    글제목변경(copy);
  }

  function sortDesc(){
    let copy = [...글제목];
    글제목변경(copy.sort());
  }
  

  return (
    <div className="App">
      <header>
        <h1>ReactBlog</h1>
      </header>
      
      <button type="button" onClick={changeTit}>두번째 글 제목 바꾸기</button>

      <button type="button" onClick={sortDesc}>가나다 순으로 정렬하기</button>

      <div className="list">
        <h4>{글제목[0]}<span onClick={함수}>👍</span>{따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{modal == false ? setModal(true) : setModal(false) }}>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {
        /* {} 안에는 if,for문 못씀 */
        modal == true ? <Modal/> : null
      }
      
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
