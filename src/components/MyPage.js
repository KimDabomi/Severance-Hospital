import React,{memo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {clearUser} from '../slices/userSlice';

const MyPage = memo(() => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    const onLogoutClick = () => {
        dispatch(clearUser());
    }
    
    return (
        <>
            <h1>MyPage</h1>
            <p>{user.name}의 페이지</p>
            <button onClick={onLogoutClick}>로그아웃</button>
        </>
    );
});

export default MyPage;