import "./App.css";
import * as E from "./1-element/Element";
import * as EE from "./1-element/Ex";

function App() {
  //이 방식은 jsx로 렌더링하지 않고
  //React 컴포넌트 자체 또는 jsx 요소로 작성된 변수를 반환하는 경우.
  //return E.hello();

  //이 방식은 React의 함수형(클래스형) 컴포넌트를
  //jsx문법으로 호출하여 반환하는 경우.
  // return <E.hello name="홍길동" />;
  // return <E.Button color="red"  />;
  // return <E.ConfirmDialog></E.ConfirmDialog>;

  // return <EE.Namecard></EE.Namecard>;
  // return <EE.Greeting name="홍길동" age="25"></EE.Greeting>;
  return EE.E1;
}

export default App;
