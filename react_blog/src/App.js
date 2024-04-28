// /* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let cname = "black-nav";

  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "맛집 추천",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState([1, 2, 3]);

  let [modal, setModal] = useState(false);

  let [index, setIndex] = useState(0);

  let [입력값, 입력값변경] = useState("");

  function 함수(i) {
    let copy = [...따봉];
    copy[i]++;
    따봉변경(copy);
  }

  function changeTit() {
    let copy = [...글제목]; // copy 문법
    copy[1] = "하노이 맛집 추천";
    글제목변경(copy);
  }

  function sortDesc() {
    let copy = [...글제목];
    글제목변경(copy.sort());
  }


  return (
    <div className="App">
      <header>
        <h1>ReactBlog</h1>
      </header>

      <button type="button" onClick={changeTit}>
        두번째 글 제목 바꾸기
      </button>
      <br />
      <button type="button" onClick={sortDesc}>
        가나다 순으로 정렬하기
      </button>

      {글제목.map(function (tit, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setIndex(i);
              }}>
              {tit}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  함수(i);
                }}>
                👍{따봉[i]}
              </span>
            </h4>
            <p>2월 17일 발행</p>
            <button type="button" onClick={()=>{
              let copy = [...글제목];
              copy.splice(i,1);
              글제목변경(copy);
            }}>삭제</button>
          </div>
        );
      })}

      <input
        type="text"
        onChange={(e) => {
          e.stopPropagation();
          입력값변경(e.target.value); // 할짝 늦음
          //console.log(입력값); //먼저출력됩
        }}>
      </input>
      <button type="submit" onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
      }}>글쓰기</button>

      {modal == true ? (
        <Modal 글제목={글제목} changeTit={changeTit} index={index} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeTit}>글수정</button>
    </div>
  );
}

export default App;
