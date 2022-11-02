import React from 'react';
import Header from './header';

const AppLayout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <main>
                {children}
            </main>
        </>
    );
};

export default AppLayout;