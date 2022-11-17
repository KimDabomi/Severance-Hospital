import React from "react";
import styled from "styled-components";

/** 컴포넌트 참조 */
import Header from "../../components/Header";
import Footer from "../../components/Footer";

/** 이미지 참조 */
import MainImage from "../../assets/img/img-visual-patient1.jpg";

/** 메인 스타일 블럭 */
const MainContainer = styled.main`
  width: 100%;
  background-color: #eee;
`;

/** 이미지 슬라이드 스타일 블럭 */
const SlideContainer = styled.figure`
  width: 1920px;
  height: 500px;
  margin: 0 auto;
`;

const MainPage = () => {
  return (
    <>
      <Header />

      <MainContainer>
        <SlideContainer>
            <img src={MainImage} alt="main_img" />
        </SlideContainer>
      </MainContainer>

      <Footer />
    </>
  );
};

export default MainPage;
