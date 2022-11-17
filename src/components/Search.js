import React, { memo, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { getStaffList } from '../slices/SearchSlice';

import { useQueryString } from '../hooks/useQueryString';

// 입력 컨트롤들을 포함하는 박스
const ControlContainer = styled.form`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;

    .controll {
        margin-right: 5px;
        display: inline-block;
        font-size: 16px;
        padding: 7px 10px 5px 10px;
        border: 1px solid #ccc;
    }

    .clickable {
        background-color: #fff;
        color: #000;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background-color: #06f2;
        }

        &:active {
            transform: scale(0.9, 0.9);
        }
    }
`;

const Search = memo(() => {
    /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
    const navigate = useNavigate();

    /** QueryString 변수 받기 */
    const { keyword } = useQueryString();
    console.log(keyword);

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.SearchSlice);
    console.log(data);

    /** 최초 마운트시 리덕스를 통해 목록을 조회한다. */
    useEffect(() => {
        dispatch(getStaffList({
            keyword: keyword
        }));
    }, [keyword]);

    /** 검색 이벤트 */
    const onSearchSubmit = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const keyword = current.keyword;
        console.log(keyword.value);
        //navigate(`/?keyword=${keyword.value}`);
        let redirectUrl = keyword.value ? `/?keyword=${keyword.value}` : '/';
        navigate(redirectUrl);
    }, [navigate]);

    return (
        <>
            <ControlContainer >
                <input type='text' name='keyword' className='controll' onSubmit={onSearchSubmit} />
                <button type='submit' className='controll clickable' >검색</button>
            </ControlContainer>

            {
                // keyword값이 입력되었을 때만 검색결과 나오게 함
                (data) && (keyword && data) ? 
                (
                    data.map(({ id, name, department, medicalSubject }, i) => {
                    return (
                        <ul>
                            <li>
                                {id}
                                {name}
                                {department}
                                {medicalSubject}
                            </li>
                        </ul>
                    )
                })) : (
                    <h1></h1>
                )
            }
        </>
    );
});

export default Search;
