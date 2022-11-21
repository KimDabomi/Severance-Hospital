import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

${reset}
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
    .dimed{
        position:fixed;
        top:150px; left:30px;
        box-shadow : #000000B3 0 0 0 9999px;
        z-index : 100;
        /* display: none; */
    }
    .popUp{
        position:fixed;
        top: 50%; left: 50%;
        width: 360px; height: 182px;
        transform: translate(-50%, -50%);
        background-color: #fff;
        z-index : 101;
    }
}

/** 버튼 관련 */
//버튼컨테이너 flex-column
.buttonContColumn{
    display: flex;
    flex-direction: column;
    align-items: center;
}
//버튼컨테이터 두개 나란히
.buttonCont{
    display: flex;
    justify-content: center;
    padding-bottom: 95px;
    box-sizing: border-box;
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
  margin-top: 30px;
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
  margin-top: 30px;
  margin-left: 6px;
  }
  

`;

export default GlobalStyles;
