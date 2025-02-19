// Ex.jsx
// 연습문제1: 컴포넌트 마운트 시 콘솔에 메시지 출력하기
// 목표: 컴포넌트가 마운트될 때 콘솔에 "컴포넌트가 마운트되었습니다." 메시지를 출력하세요.
// 요구사항:
// useEffect를 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정하세요.
// 힌트: 빈 배열 []을 의존성 배열로 사용하세요.

import { useEffect, useState } from "react";

export function E1() {
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다");
  }, []);

  return <div></div>;
}

// 연습문제2. 상태값이 변경될 때 메시지 출력하기
// 목표: 버튼을 클릭하여 상태값을 변경할 때마다 콘솔에 상태값이 출력되도록 만드세요.
// 요구사항:
// useEffect를 사용하여 상태값이 변경될 때마다 메시지를 출력하세요.
// 힌트: useEffect의 의존성 배열에 상태값을 넣으세요.

export function E2() {
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    console.log("변경되었습니다.");
  }, [isChange]);

  return (
    <div>
      <button
        onClick={() => {
          setIsChange(!isChange);
        }}
      >
        버튼
      </button>
    </div>
  );
}

//연습문제3: 타이머 기능 (마운트 및 언마운트)
// 목표: 컴포넌트가 마운트되면 1초마다 상태값이 증가하는 타이머를 시작하고, 컴포넌트가 언마운트될 때 타이머를 정리하세요.
// 요구사항:
// useEffect를 사용하여 마운트 시 타이머를 시작하고, 언마운트 시 타이머를 정리하세요.
// 1초마다 상태값을 증가시키세요.
// 힌트: setInterval과 clearInterval 사용

export function E3() {
  const [isMount, setIsMount] = useState(true);
  const [count, setCount] = useState(-1);

  useEffect(() => {
    let interval = setInterval(() => {
      // prev는 이전 상태 값을 의미합니다.
      // 왜 prev가 필요한가?
      // prev를 사용하면 React가 보장하는 최신 상태 값에 기반해
      // 안전하게 상태를 업데이트할 수 있습니다.
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      {isMount ? count : ""}
      <button
        onClick={() => {
          setIsMount(!isMount);
        }}
      >
        버튼
      </button>
    </div>
  );
}

// 4. 윈도우 크기 변경 감지
// 목표: 윈도우의 크기가 변경될 때마다 현재 창의 너비를 화면에 표시하세요.
// 요구사항:
// useEffect로 이벤트 리스너를 등록하고 창 크기가 변경될 때마다 상태를 업데이트하세요.
// 언마운트 시 이벤트 리스너를 해제하세요.
// 힌트: window.addEventListener와 window.removeEventListener

export function E4() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleEvent = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleEvent);

    return () => {
      window.removeEventListener("resize", handleEvent);
    };
  }, []);
  return <div>{width}</div>;
}

//연습문제5: API 호출 및 데이터 로드
// 목표: 컴포넌트가 마운트될 때 API 호출을 통해 데이터를 가져와 화면에 표시하세요.
// 요구사항:
// 1. URL: https://jsonplaceholder.typicode.com/posts
// 2. 상위 10개의 포스트 테이터만 출력하세요.
// 3. useEffect를 사용하여 컴포넌트가 마운트될 때 데이터를 로드하세요.
// 4. 데이터를 로드한 후 상태에 저장하고 화면에 출력하세요.
// 힌트: fetch 또는 axios 모듈 사용 가능합니다.

export function E5() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //비동기 함수로 API 호출
    //async/await : JS에서 비동기적인 처리를 할 때 사용되는 구문
    //axios함수는 기본 응답이 json객체 형태이다.
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json()) // json형태의 문자열을 json객체로 변환
      .then((result) => setData(result.slice(0, 10)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>데이터 로드</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <b>id:</b>
            {item.id}
            <br />
            <b>title:</b>
            {item.title}
            <br />
            <b>body:</b>
            {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
