import React, { memo } from 'react';
import MyPageHeader from '../../components/MyPageHeader';
import LoginFooter from '../../components/LoginFooter';
import styled from 'styled-components';

const Container = styled.div`

`;

const DetailsEdit = memo(() => {
    return (
        <Container>
            <MyPageHeader />
            <LoginFooter />
        </Container>
    );
});

export default DetailsEdit;