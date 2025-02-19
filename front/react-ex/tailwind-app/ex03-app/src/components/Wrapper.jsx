import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  width: 100vw;
  height: 100vh;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  padding: 2rem 3rem;
`;
const Logo = styled.div`
  color: blue;
  font-size: 3rem;
  font-weight: 800;
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  font-size: 1.5rem;
  font-weight: 500;

  @media screen and (max-width: 766px) {
    display: none;
  }
`;
const Nav = styled.div``;
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 3rem 0 1rem 2rem;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 4rem;
`;
const MainSection = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 766px) {
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  background-color: white;
  height: 18vh;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #cdcdcd;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  flex-grow: 1;
  @media screen and (max-width: 1023px) {
    flex-grow: 0;
  }
  @media screen and (max-width: 766px) {
    flex-grow: 1;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  font-size: 1.6rem;
`;
const Item = styled.div`
  color: blue;
  font-weight: 700;
`;
const Price = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;
const CardMain = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 2rem;
`;
const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  color: blue;
  background-color: aliceblue;
  border-radius: 10px;

  width: 6rem;
  height: 3rem;
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  color: white;
  background-color: blue;
  border-radius: 10px;

  width: 8rem;
  height: 3rem;
`;

export default function Wrapper() {
  return (
    <Container>
      <Header>
        <Logo>TechStore</Logo>
        <Navbar>
          <Nav>제품</Nav>
          <Nav>서비스</Nav>
          <Nav>회사소개</Nav>
        </Navbar>
      </Header>

      <Main>
        <Title>추천 제품</Title>
        <MainSection>
          <Card>
            <CardHeader>
              <Item>프리미엄 노트북</Item>
              <Price>1,599,000원</Price>
            </CardHeader>
            <CardMain>최신 사양의 고성능 노트북</CardMain>
            <CardFooter>
              <Category>전자기기</Category>
              <Btn>장바구니 담기</Btn>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Item>프리미엄 노트북</Item>
              <Price>1,599,000원</Price>
            </CardHeader>
            <CardMain>최신 사양의 고성능 노트북</CardMain>
            <CardFooter>
              <Category>전자기기</Category>
              <Btn>장바구니 담기</Btn>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Item>프리미엄 노트북</Item>
              <Price>1,599,000원</Price>
            </CardHeader>
            <CardMain>최신 사양의 고성능 노트북</CardMain>
            <CardFooter>
              <Category>전자기기</Category>
              <Btn>장바구니 담기</Btn>
            </CardFooter>
          </Card>
        </MainSection>
      </Main>
    </Container>
  );
}
