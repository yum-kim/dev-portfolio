import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    padding: 50px 0;
    border-top: 1px solid #e6e6e6;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.2rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

const Icon = styled.i`
    font-size: 1.4rem;
    margin-right: 0.8rem;
`;

const Header = () => {
    return (
        <FooterWrapper>
            <IconWrapper>
                <Icon className='bi bi-envelope-fill' />
                <span>
                    <a href="mailto:dwkimym93@gmail.com" target="_blank" rel="noreferrer noopener">dwkimym93@gmail.com</a>
                </span>
            </IconWrapper>
            <IconWrapper>
                <Icon className='bi bi-telephone-fill' />
                <span>010-4323-2191</span>
            </IconWrapper>
        </FooterWrapper>
    );
};

export default Header;