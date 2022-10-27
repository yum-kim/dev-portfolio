import React from 'react';

const AppLayout = ({ children }) => {
    return (
        <>
            <header></header>
            <main>
                {children}
            </main>
        </>
    );
};

export default AppLayout;