/**
 * @ File Name: NoticeTest.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-09 12:48
 * @ Description: 공지사항 mapper 생성테스트
 */
const DBPool = require('../helper/DBPool');
const noticeService = require('../services/NoticeService');

// add
// (async () => {
//     try{
//         const params = {noticeTitle:'서울(서부)역‧용산역 셔틀버스 신설 안내',noticeContent:'<p>2022년 11월 1일(화)부터 서울(서부)역과 용산역 셔틀버스가 신설되었습니다.</p><p>서울(서부)역과 용산역에서 셔틀버스를 타시면 세브란스병원 본관 3층에서 하차합니다. 많은 이용 부탁 드립니다.</p><p><br/></p><p>그리고 신촌역과 경복궁역을 가는 셔틀버스의 승강장이 변경됐습니다.</p><img src="https://sev.severance.healthcare/_attach/yuhs/editor-image/2022/11/YbIQGFxURhUXEgVKvidNaPvsYS.jpg" alt="공지사항"/>', hits:0
//     };
//         let result = await noticeService.addItem(params);
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();

// edit
// (async () => {
//     try{
//         const params = {id:1, noticeTitle:'[아시아경제] [하루만보하루천자 운동에 동참합니다] 윤동섭 연세의료원장',noticeLink:'https://view.asiae.co.kr/article/2023010407595481794', editDate:'2023-01-05'};
//         let result = await noticeService.editItem(params);
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();

// 조회수
// (async () => {
//     try{
//         const params = {id:1};
//         let result = await noticeService.editItem(params);
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();

// 다중행조회
// (async () => {
//     try{
//         let result = await noticeService.getList();
//         console.log(result);
//     }catch(e){
//         console.error(e);
//     }finally{
//         DBPool.close();
//     }
// })();

// 단일조회
(async () => {
    try{
        const params = {id:1};
        let result = await noticeService.getItem(params);
        console.log(result);
    }catch(e){
        console.error(e);
    }finally{
        DBPool.close();
    }
})();

//뉴스삭제
// (async () => {
//     try {
//         const params = { id: 16 };
//         await noticeService.deleteItem(params);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         DBPool.close();
//     }
// })();