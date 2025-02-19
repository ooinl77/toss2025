import Footer from "./Footer";
import Header from "./Header";
import Main1 from "./Main1";
import Nav from "./Nav";

export default function Wrapper() {
  return (
    <div className="flex-col ">
      <Header></Header>
      <Nav></Nav>
      <Main1></Main1>
      <Footer></Footer>
    </div>
  );
}
