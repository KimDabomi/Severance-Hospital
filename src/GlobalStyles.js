import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
/** 리셋 CSS */
${reset}

/**
네이버 나눔 글꼴 https://hangeul.naver.com/font/nanum

나눔고딕
font-family: 'NanumGothicLight';
font-family: 'NanumGothic';
font-family: 'NanumGothicBold';
font-family: 'NanumGothicExtraBold';

나눔스퀘어
font-family: 'NanumSquareLight';
font-family: 'NanumSquare';
font-family: 'NanumSquareBold';
font-family: 'NanumSquareExtraBold';
font-family: 'NanumSquareAcb';
font-family: 'NanumSquareAceb';
font-family: 'NanumSquareAcl';
font-family: 'NanumSquareAcr';
*/

img {
  display: block;
}

a {
  font-family: 'NanumSquare';
  text-decoration: none;
  color: black;
}

strong {
font-family: 'NanumSquare';
font-weight: 700;
}

h1, h2, h3, h4, h5, p, span {
font-family: 'NanumGothic';
}
body{
    font-size: 16px;
    color: #333;
    letter-spacing: 0.02em;
    line-height: 1.625;
}

textarea{
    resize: none;
}

/** 페이지 관련 */
//전체 Cont
.pageCont{
    margin: auto;
    max-width: 1280px;
    padding-bottom: 95px;

}
//페이지 상위 타이틀
.pageTitle{
    text-align: center;
    font-size: 40px;
    padding: 73px 0 65px 0;
    box-sizing: border-box;
}
//페이지 서브타이틀
.pageSubtitle{
    font-size: 20px;
    line-height: 34px;
    padding-left: 19px;
    position: relative;
    font-weight: bold;
    color: #222;
    margin: 47px 0 22px 18px;
    margin-left: 0px !important;
    box-sizing: border-box;
    &::before{
        top: 0.55em;
        margin-right: 8px;
        position: absolute;
        width: 11px;
        height: 11px;
        border: 3px solid #0094fb;
        border-radius: 50%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        content: '';
        left: 0;
    }
}
//공지사항
.boxGuide{
    width: 100%;
    height: 200px;
    margin: 0 0 60px 0;
    padding: 20px 30px;
    box-sizing: border-box;
    border: 1px solid #e3e3e3;
    position: relative;
        img{
            position: absolute;
            width: 41px;
            height: 7px;
            top: -3px;
        }
    }
//회색공지사항
.grayboxGuide{
    padding: 25px 30px;
    background-color: #f9f9f9 !important;
    box-sizing: border-box;
    font-size: 16px;
    color: #333;
    letter-spacing: 0.02em;
    line-height: 1.625;
    li{
        padding-top: 8px;
        box-sizing: border-box;
        &:first-child{ padding-top: 0;}
        p{
            font-size:16px;
            &:first-child{
                margin: 4px 0;
                font-weight: bold !important;
                display: block;
            }
        }
    }
}

/** 팝업창 관련 */
.popUpCont{
    display: none;
    .dimed{
        position:fixed;
        top:150px; left:30px;
        box-shadow : #000000B3 0 0 0 9999px;
        z-index : 100;
    }
    .popUp{
        position:fixed;
        top: 50%; left: 50%;
        width: 360px; height: 182px;
        transform: translate(-50%, -50%);
        background-color: #fff;
        z-index : 101;
        text-align:center;
        padding: 30px;
        box-sizing: border-box;
        font-size: 16px;    
    }
    .alert{
        height: 50%;
        word-wrap:break-word;
    }
    .closeBtnCont{
        height: 50%;
        position: relative;
        padding-top: 20px;
        box-sizing: border-box;
        .closeBtn{
            border: none;
            width: 80px; height: 40px;
            background-color: #0094fb;
            color: white;
            min-width: 80px;
            padding: 0 19px;
            font-size: 16px;
            border-radius: 3px;
        }
    }
}
    


/** 버튼 관련 */
//버튼컨테이너 flex-column
.buttonContColumn{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}
//버튼컨테이터 두개 나란히
.buttonCont{
    display: flex;
    justify-content: center;
    padding-bottom: 95px;
    box-sizing: border-box;
    margin-top: 30px;
}
//파란색 둥근 버튼
.buttonBlue {
  background-color: #0094fb;
  color: #fff;
  border-radius: 25px;
  min-width: 80px;
  height: 40px;
  padding: 0 18px;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  box-sizing: border-box;
  
  border: none;
  }
  //하얀색 둥근 버튼
  .buttonWhite {
  background-color: #fff;
  color: #0094fb;
  border: 2px solid #0094fb;
  border-radius: 25px;
  min-width: 80px;
  height: 40px;
  padding: 0 18px;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  box-sizing: border-box;
  }
  .marginleft{
    margin-left: 6px;
  }
  
  /** 나의작성글 View 페이지 */
  .suggestionViewCont{
    border-top: 1px solid #888;
    border-bottom: 1px solid #888;

    .subjectArea{
        padding: 15px 30px;
        border-bottom: 1px solid #e6e6e6;
    }
  }
  .subject{
    font-weight: bold;
    line-height: 1.5;
    font-size: 24px;
  }
  .articleInfo{
    margin-top: 15px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: #666;
  }
  .extendField{
    border-bottom: 1px solid #e6e6e6;
    padding: 15px 30px;

    dt{
        font-weight: bold;
        margin-right: 20px;
        white-space: nowrap;
    }
    span{
        color: #666;
    }
  }
  .articleQarea{
    padding: 36px 30px 36px 70px;
    position: relative;
    .qnaTitle{
    position: absolute;
    top: 40px;
    left: 30px;
    width: 28px;
    height: 28px;
    line-height: 28px;
    border-radius: 50%;
    background-color: #e6e6e6;
    text-align: center;
    }
    .articleArea{
        width: 100%;
        overflow:hidden;
        word-wrap:break-word;
    }
  }

  .flexBetween{
    display: flex;
    justify-content: space-between;
  }
  .flex{
    display: flex;
    padding-top:4px;
    &:first-child{
        padding-top:0;
    }
  }

  /** 의약품 검색 페이지 */
  .tabMenu{
    margin-bottom: 60px;
    border: 1px solid #ebebeb;
    overflow: hidden;
    position: relative;
    background-color: #f9f9f9;
    padding-bottom: 2px;
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    a{
        display: block;
        height: 100%;
        width: 50%;
        line-height: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: center;
        font-size: 18px;
        line-height: 3;
        color: #333;
        &:first-child{
            border-right: 1px solid #ebebeb;
        }
        &.active{
            background-color: #fff;
            font-weight: bold;
            border-bottom: 3px solid #ffd553;
        }
    }
  }

  /** 의약품 검색페이지 */
  .formControl {
    width: 100%;
    border-radius: 0;
    height: 45px;
    border: 1px solid #dadada;
    padding: 8px 15px;
    background: #fff;
    text-align: left;
    font-size: 16px;
    line-height: 27px;
    vertical-align: middle;
    box-sizing: border-box;
    &:focus {
      outline: none;
      border-color: #0094fb;
    }
  }

`;

export default GlobalStyles;
