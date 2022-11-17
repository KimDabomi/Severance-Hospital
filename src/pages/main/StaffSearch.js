import React, { memo, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { getStaffList } from '../../slices/SearchSlice';

import { useQueryString } from '../../hooks/useQueryString';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import Dropdown from '../../components/Dropdown';

const MainContainer = styled.main`
    margin: 0 auto;
    text-align: center;
`;

const SearchContainer = styled.div`
    
`;

const StaffSearch = memo(() => {

    return (
        <>
            <Header />
                <MainContainer>
                <SearchContainer>
                    <Dropdown />
                    <Search />
                </SearchContainer>
                </MainContainer>
            <Footer />
        </>
    );
});

export default StaffSearch;