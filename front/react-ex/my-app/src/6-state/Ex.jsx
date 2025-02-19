//Ex.jsx

import { useEffect, useState } from "react";

// 연습문제 1: 입력된 텍스트를 화면에 바로 보여주기
// 설명: 입력 필드에 사용자가 입력한 텍스트를 바로 화면에 표시하세요.
// 힌트: onChange 이벤트

export function E1() {
  const [string, setString] = useState("");

  useEffect(() => {}, [string]);
  return (
    <div>
      <input
        type="text"
        id="msg"
        onChange={(e) => setString(e.target.value)}
      ></input>
      <p>{string}</p>
    </div>
  );
}

// 연습문제 2: 버튼을 클릭할 때마다 색상 변경하기
// 설명: 버튼을 클릭할 때마다 배경 색상이 빨강, 초록, 파랑으로
//    순차적으로 변경되도록 만드세요.

export function E2() {
  //   const [color, setColor] = useState("red");
  //   const [count, setCount] = useState(0);
  //   const set_bgc = () => {
  //     const colorArray = ["red", "green", "blue"];
  //     setCount(count + 1);
  //     setColor(colorArray[count % 3]);
  //  };

  //리팩토링
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["red", "green", "blue"];

  const set_bgc = () => {
    setColorIndex((colorIndex + 1) % 3);
  };

  return (
    <div style={{ backgroundColor: colors[colorIndex] }}>
      <button onClick={set_bgc}>배경색 변경</button>
    </div>
  );
}

// 연습문제 3: 체크박스 상태 관리하기
// 설명: 체크박스를 클릭하면 "ON" 또는 "OFF"라는 텍스트가
//   화면에 표시되도록 만드세요.
// 힌트: onChange, checked 속성을 이용

export function E3() {
  const [string, setString] = useState("off");
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => {
          e.target.checked ? setString("on") : setString("off");
        }}
      ></input>
      <p>{string}</p>
    </div>
  );
}

// 연습문제 4: 숫자 제한 걸기
// 설명: 숫자를 증가시키되, 숫자가 10 이상이면
//   더 이상 증가하지 않도록 제한하세요.

export function E4() {
  const [num, setNum] = useState(0);
  const handleClick = () => {
    if (num < 10) setNum((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>{num}</button>
    </div>
  );
}

// 연습문제 5: 버튼을 클릭할 때마다 리스트에 항목 추가하기
// 설명: 버튼을 클릭하면 입력 필드의 값을 리스트에 추가하고,
//   추가된 항목들을 화면에 표시하세요.
// 힌트: [], ["aaa", "bbb", "ccc"]

export function E5() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState();
  const handleClick = () => {
    setList(list.concat(item));
    document.getElementById("k").value = "";
  };
  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div>
      <input
        type="text"
        id="k"
        onChange={(e) => setItem(e.target.value)}
      ></input>
      <button onClick={handleClick}>리스트 추가</button>

      {list.map((i, index) => {
        return <div key={index}>{i}</div>;
      })}
    </div>
  );
}
