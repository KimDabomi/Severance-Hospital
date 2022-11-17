import React, { memo, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { getStaffList, getItem } from '../slices/SearchSlice';
import useMountedRef from '../hooks/useMountedRef';

const Dropdown = memo(() => {

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.SearchSlice);
    console.log(data);

    // 이 컴포넌트가 화면에 마운트 되었는지를 확인하기 위한 hook
    const mountedRef = useMountedRef();

    /** 드롭다운 선택 변경시 호출되는 이벤트 */
    const onSelectChange = useCallback( (e) => {
        e.preventDefault();
        
        // 드롭다운의 입력값 취득
        const current = e.target;
        const key = current.name;
        console.log(current);
        const value = current[current.selectedIndex].value;
        console.log(value);

        /**/
        // 상태값 변수 직접 대입  ⇒ 원본 상태값을 복사(전개연산자 …) 후 가공 ⇒ 화면갱신 발생
        // 상태값 변수 직접 대입 형태 ⇒ 상태값에 따른 side effect(후속 처리: useEffect) 처리 가능
        // newState 변경된 값을 바탕으로 Ajax를 다시 전송한다

        // 기존의 상태값을 그대로 복사한 상태에서
        // 드롭다운의 name속성과 일치하는 key에 대한 value를 수정
        // const newState = {...department, [key]: value};

        // // 상태값 갱신
        // setDepartment(newState);

        // // 갱신된 상태값 확인
        // console.log(newState);
        
        dispatch(getStaffList({
            department: e.currentTarget.value
        }));
    }, [dispatch]);


    return (
        <>
        {/* 평소에는 안 뜨다가 선택된 데이터가 떠야함... */}
            <select name='department' onChange={onSelectChange} className='' >
                <option value="">부서를 선택해 주세요</option>
                {data && data.map((v, i) => {
                    return (
                        <option key={i} value={v.department}>
                        {v.department}</option>
                    )
                })}
            </select>
            {(data) && data.map(({
                id, name, department, medicalSubject
            }, i) => {

                return(                
                <ul>
                    <li>
                        {/* {id}
                        {name}
                        {department}
                        {medicalSubject} */}
                    </li>
                </ul>
                );
            })}
        </>
    );
});

export default Dropdown;
