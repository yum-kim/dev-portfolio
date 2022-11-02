import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    padding-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
`;

const Icon = styled.i`
    font-size: 1.3rem;
    margin-right: 5px;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <IconWrapper>
                <Icon className='bi bi-envelope-fill' />
                <span>dwkimym93@gmail.com</span>
            </IconWrapper>
            <IconWrapper>
                <Icon className='bi bi-telephone-fill' />
                <span>010-4323-2191</span>
            </IconWrapper>
        </HeaderWrapper>
    );
};

export default Header;