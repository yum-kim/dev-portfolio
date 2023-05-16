import React from 'react';

const Qualification = () => {
    return (
        <article className='box'>
            <span className='english-title'>Qualifications</span>
            <h2 className='main-title mb'>자격사항</h2>
            <div className='container'>
                {/* <h3 className='sub-title quoto'></h3> */}
                <ul>
                    <li className='item bullet'>
                        <p className=''>웹디자인기능사 2급</p>
                        <span className='additional'>2020.07 취득</span>
                    </li>
                    <li className='item bullet'>
                        <p className=''>GTQ 포토샵 1급</p>
                        <span className='additional'>2019.12 취득</span>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default Qualification;