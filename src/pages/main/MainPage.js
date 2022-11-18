<<<<<<< HEAD
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
=======
import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import MainImage from '../../assets/img/img-visual-patient1.jpg';

const MainContainer = styled.main`
  margin: 0 auto;
  text-align: center;
`;

>>>>>>> login-kdbm

const MainPage = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
    <Header />
    <MainContainer>
    <img src={MainImage} alt="main_img" />
    <div>
      <h1>Main Contants</h1>
    </div>
    <a>TOP</a>
    </MainContainer>
    <Footer />
    </>
  )
}

export default MainPage
>>>>>>> login-kdbm
