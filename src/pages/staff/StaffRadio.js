import React, { memo } from 'react';

import styled from 'styled-components';

const SearchRadio = styled.div`
    margin: 65px 0 20px 0;

    span {
        margin-right: 25px;
    }
`;


const StaffRadio = memo(() => {
    return (
        <SearchRadio>
            <span>
                <label>
                    <input type='radio' name='departmentSelect1' />진료과
                </label>
            </span>
            <span>
                <label>
                    <input type='radio' name='departmentSelect1' />센터
                </label>
            </span>
            <span>
                <label>
                    <input type='radio' name='departmentSelect1' />클리닉
                </label>
            </span>
        </SearchRadio>
    );
});

export default StaffRadio;
