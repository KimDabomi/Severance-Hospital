import React,{memo,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import {loginUser} from '../slices/userSlice';
import axios from "axios";

const LoginPage = memo(() => {
    const [id,setId] = useState('');
    const [pw,setPw] = useState('');
    const [msg,setMsg] = useState();

    const user = useSelector((state) => {return state.user});
    const dispatch = useDispatch();

    const onLoginClick = e => {
        e.preventDefault();

        if (!id || !pw) {
            return alert('사용자 정보 확인 후 다시 시도해 주십시요.');
        } else {
            let info = {
                id: id,
                pw: pw
            };

            axios.post('Endpoint',info).then((result) => {
                console.log(result.data);

                if (result.data.code === 200) {
                    dispatch(loginUser(result.data.userInfo));
                    setMsg('');
                } else {
                    setMsg('사용자 정보 확인 후 다시 시도해 주십시요.');
                }
            });
        }
    }

    return (
        <>
            <h2>로그인</h2>
            <form onSubmit={onLoginClick}>
                <input type='text' id='id' placeholder='아이디를 입력해 주세요.' value={id} onChange={e => setId(e.target.value)} />
                <input type='text' id='password' placeholder='비밀번호를 입력해 주세요.' value={pw} onChange={e => setPw(e.target.value)} />
                <button type='submit'>로그인</button>
            </form>
        </>
    );
});

export default LoginPage;