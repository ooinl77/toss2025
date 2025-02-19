// Ex2.jsx
// 문제 1: 조건부 렌더링과 단일 Props
// 목표: 특정 조건에 따라 다른 인삿말을 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - Greeting이라는 컴포넌트를 만드세요.
// - props로 name과 isMorning을 받아 인삿말을 출력합니다.
// - isMorning이 true이면 "좋은 아침입니다, [name]님!"
//   그렇지 않으면 "좋은 저녁입니다, [name]님!"
// - 부모 컴포넌트에서 두 가지 경우를 모두 테스트하세요.

import { useState } from "react";

function Greeting(props) {
  {
    if (props.isMorning) {
      return <div>좋은 아침입니다, {props.name}님!</div>;
    } else {
      return <div>좋은 저녁입니다, {props.name}님!</div>;
    }
  }
}

//문제 2: 사용자 상태 변화 관리
// 목표: 버튼 클릭에 따라 사용자 나이를 변경하는 컴포넌트를 작성하세요.
// 요구사항:
// - UserCard라는 컴포넌트를 작성하세요.
// - name, age를 props로 받아 초기 값을 표시합니다.
// - "한 살 더 먹기" 버튼을 클릭하면 나이가 증가합니다.
// - 부모 컴포넌트에서 두 명의 사용자 상태를 관리합니다.

function UserCard({ name, age, clickFunc }) {
  return (
    <div>
      <p>
        이름, 나이: {name}, {age}
      </p>
      <button onClick={clickFunc}>한 살 더 먹기</button>
    </div>
  );
}

export function PropsEx2() {
  const [age1, setAge1] = useState(20);
  const [age2, setAge2] = useState(30);

  const user1 = {
    name: "철수",
    age: age1,
  };

  const user2 = {
    name: "영희",
    age: age2,
  };

  function handleClick1() {
    setAge1((a) => a + 1);
  }
  function handleClick2() {
    setAge2((a) => a + 1);
  }
  return (
    <div>
      <Greeting isMorning={true} name="홍길동" />
      <Greeting isMorning={false} name="홍길동" />
      <hr></hr>
      <UserCard {...user1} clickFunc={handleClick1} />
      <UserCard {...user2} clickFunc={handleClick2} />
    </div>
  );
}
