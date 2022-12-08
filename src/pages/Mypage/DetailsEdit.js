import React, { memo } from 'react';
import MypageHeader from '../../components/MypageHeader';
import LoginFooter from '../../components/LoginFooter';
import styled from 'styled-components';

const Container = styled.div`

`;

const DetailsEdit = memo(() => {
    return (
        <Container>
            <MypageHeader />
            <LoginFooter />
        </Container>
    );
});

export default DetailsEdit;