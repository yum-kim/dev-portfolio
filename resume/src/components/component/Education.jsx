import React from 'react';

const Education = () => {
    return (
        <article className='box'>
            <span className='english-title'>Education</span>
            <h2 className='main-title mb'>교육사항</h2>
            <div className='container'>
                <ul>
                    <li className='item bullet'>
                        <p>웹 퍼블리셔(UI/UX 반응형 웹디자인) 양성과정</p>
                        <p className='additional'>2020.03 수료</p>
                    </li>
                    {/* <li className='item bullet'>
                        <p>남서울대학교 국제유통학과 졸업</p>
                        <p className='additional'>2011.03 - 2015.02</p>
                    </li> */}
                </ul>
            </div>
        </article>
    );
};

export default Education;