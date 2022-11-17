import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import MainImage from '../../assets/img/img-visual-patient1.jpg';

const MainContainer = styled.main`
  margin: 0 auto;
  text-align: center;
`;


const MainPage = () => {
  return (
    <>
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
