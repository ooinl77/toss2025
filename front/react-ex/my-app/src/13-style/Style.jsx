// React + CSS 관련 플러그인
// 1.ES7+ React/Redux/React-Native snippets
// 2.Auto Import
// 3.ESLint : 문법체크
// 4.Prettier - Code formatter
// 5.vscode-styled-components
// 6.Tailwind CSS IntelliSense

//Style.jsx
//리액트에서 css를 구현하는 방법
//1. JS Inline Style 속석
//2. styled-components 모듈 사용
//3. tailwind css 모듈 사용

//1. js inline
import React from "react";

function InlineStyle() {
  const boxStyle = {
    backgroundColor: "lightBlue",
    color: "darkblue",
    padding: "20px",
    border: "2px solid navy",
    borderRadius: "8px",
    textAlign: "center",
  };
  return (
    <div style={boxStyle}>
      <h1 style={{ fontSize: "24px", margin: "0" }}>
        리액트 인라인 스타일 예제
      </h1>
      <p style={{ fontStyle: "Italic" }}>JS 객체로 스타일을 적용하는 예제</p>
    </div>
  );
}

export default InlineStyle;
