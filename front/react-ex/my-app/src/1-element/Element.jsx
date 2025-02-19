// 리액트 엘리먼트(React Element)란?
// 리액트 엘리먼트는 리액트 앱의 UI를 구성하는 가장 작은 단위입니다. 엘리먼트는 화면에 표시될 내용을 설명하는 자바스크립트 객체로, 컴포넌트를 생성하고 렌더링하는 데 사용됩니다.

// 리액트 엘리먼트는 **불변(immutable)**이며 한 번 생성되면 그 내용을 변경할 수 없습니다. 대신 새로운 엘리먼트를 생성하여 화면의 변화를 반영합니다.

// 리액트 엘리먼트의 특징
// 1. 불변성: 엘리먼트는 한 번 생성되면 변경할 수 없습니다.
// 2. 가볍고 빠름: 가상 DOM을 사용하여 변경 사항을 효율적으로 관리합니다.
// 3. UI의 구성 단위: 컴포넌트 내에서 리액트 엘리먼트는 HTML 태그처럼 사용됩니다.

import React from "react";
//React 17이상에서는 import하지 않아도 jsx사용 가능

const E1 = <h1 className="greeting">리액트 엘리먼트1입니다.</h1>;
export const E2 = React.createElement(
  "h1", //type
  //null, //props
  { className: "greeting" },
  "리액트 엘리먼트2입니다." //[...children]
);

//jsx에서 js시작하려면, {}중괄호 사용
//js에서 스타일은 kv객체로 사용
export const E3 = <h1 style={{ color: "blue" }}>엘리먼트3</h1>;

const fruits = ["사과", "바나나", "포도"];
export const E4 = (
  <ul>
    {fruits.map((item, index, array) => {
      //{js값 표현식}
      //리액트의 리스트(목록)은 key값을 줘야 한다.
      return <li key={index}>{item}</li>;
    })}
  </ul>
);

export const E5 = (
  <ul>
    {fruits.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

//소괄호 없이 return하는 경우: return뒤에 바로 jsx나 값이 올 경우
//소괄호로 return하는 경우: 함수 컴포넌트를 return
//여러 요소를 return하는 경우는 최상위 단일 요소로 만들어야 함
function handleClick() {
  alert("버튼이 클릭되었습니다.");
}
export const E6 = (
  <>
    <h1>이벤트 처리</h1>
    <button onClick={handleClick}>클릭하세요</button>
  </>
);

//props로 데이터 전달하기
export function hello(props) {
  //return문과 같은 줄에 있을 때 소괄호가 없음.
  return <h1>안녕하세요. {props.name}</h1>;
}

export function Button(props) {
  return (
    <button style={{ color: props.color }}>
      <b>{props.children}</b>
    </button>
  );
}

export function ConfirmDialog(props) {
  return (
    <div>
      <p>확인 버튼을 눌러주세요.</p>
      {/* 컴포넌트 합성 */}
      <Button color="green">
        <span>확인</span>
        <span>버튼</span>
      </Button>
    </div>
  );
}

export default E1; //내보내기 할 하나의 컴포넌트(요소)
// export { E1, E2 }
