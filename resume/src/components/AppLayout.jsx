import React from 'react';
import styled from 'styled-components';

const AppLayout = ({ children }) => {
    const mainWrapper = styled.main`

    
    `;

    return (
        <mainWrapper>
            <nav>고정영역</nav>
            <section>
                {children}
            </section>
        </mainWrapper>
    );
};

export default AppLayout;