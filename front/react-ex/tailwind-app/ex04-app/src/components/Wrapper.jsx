import styled from "styled-components";
import logo from "../img/logo.PNG";
import footerimg from "../img/footerimg.PNG";
import { useState } from "react";
import burgerImg from "../img/burger.png";
import cafeImg from "../img/cafe.png";
import hospitalImg from "../img/medi.png";
import atmImg from "../img/atm.png";
import ktxImg from "../img/ktx.jpg";
import busImg from "../img/bus.jpg";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fbe79d;
`;
const Logo = styled.img`
  width: 20rem;
`;
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 4rem;
  margin: 4rem;
`;
const CardWrapper = styled.div`
  display: flex;
  flex: 1 1 30%;
  flex-direction: column;
  background-color: ${(props) => props.bg};
  border-radius: 18px;
  width: 10rem;
  height: 10rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: 0.3rem 0.3rem 1rem gray;
`;
const CardImg = styled.img`
  display: flex;
  background-color: transparent;
  width: 4rem;
`;
const CardTitle = styled.div`
  background-color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Footer = styled.img`
  width: 100vw;
`;

function CardWrap(props) {
  console.log(props);

  return (
    <>
      {props.title.map((item, index) => {
        return (
          <CardWrapper key={index} bg={item.bg}>
            <CardImg src={item.img} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
          </CardWrapper>
        );
      })}
    </>
  );
}

export default function Wrapper() {
  const itemList = [
    { img: burgerImg, title: "패스트푸드", bg: "orange" },
    { img: cafeImg, title: "카페", bg: "brown" },
    { img: hospitalImg, title: "병원", bg: "green" },
    { img: atmImg, title: "ATM", bg: "purple" },
    { img: ktxImg, title: "KTX", bg: "skyblue" },
    { img: busImg, title: "버스", bg: "cyan" },
  ];
  return (
    <Wrap>
      <Header>
        <Logo src={logo}></Logo>
      </Header>
      <Main>
        <CardWrap title={itemList} />
      </Main>
      <Footer src={footerimg}></Footer>
    </Wrap>
  );
}
