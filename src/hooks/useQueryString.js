import {useLocation} from 'react-router-dom';

const useQueryString = (props) => {
    // Query string 문자열 추출함
    const {search} = useLocation();
    // Query string 문자열을 객체로 변환
    const query = new URLSearchParams(search);
    // 생성된 객체를 JSON으로 변환
    const params = Object.fromEntries(query);
    return params;
};

export {useQueryString};