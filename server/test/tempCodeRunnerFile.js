(async () => {
    try{
        const params = {newsTitle:'[중앙일보] 연세대 송도 세브란스병원 착공… 2026년 말 개원 목표',newsLink:'https://www.joongang.co.kr/article/25129732#home'};
        let result = await newsService.addItem(params);
        console.log(result);
    }catch(e){
        console.error(e);
    }finally{
        DBPool.close();
    }
})();