import React from 'react';

const AppLayout = ({ children }) => {
    return (
        <>
            <header>고정영역</header>
            <main>
                {children}
            </main>
        </>
    );
};

export default AppLayout;