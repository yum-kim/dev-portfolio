import React from 'react';
import { useState, useEffect } from 'react';

const Intro = () => {
    // useEffect(() => { 
    //     const hoverImg = new Image();
    //     hoverImg.src = '/assets/images/profile.jpg';
    // }, []);

    return (
        <article className='box intro'>
            <div>
                <div className="intro-title">
                    <h2 className='secondary-main-title'>안녕하세요.</h2>
                    <h2 className='main-title underline'>Front-end Developer</h2>
                    <h2 className='main-title name' onMouseEnter='replace'>김유미입니다.</h2>
                </div>
                <div className='intro-profile'>
                    <div>
                        {/* <img src={process.env.PUBLIC_URL + `${isHover ? "/images/profile.jpg" : "/images/profile2.jpg"}`} alt="profile" onMouseOver={onMouseOverEvent} /> */}
                    </div>
                </div>
                <div className='intro-box'>
                    <p className='intro-text'><span className='bold'>3년차 웹 프론트엔드 개발자</span>로 프로젝트 초기 기획 단계부터 배포 후 서비스 안정화 단계까지 참여해 본 경험이 있습니다.</p>
                    <p className="intro-text">딱 떨어지는 보기 좋은 UI에 사용성 좋은 기능을 고민하고, 이를 구현하는 것을 즐깁니다.</p>
                    <p className='intro-text'>웹 퍼블리셔로 일을 시작했기 때문에, UI 구현에 강점 또한 가지고 있으며 개발 프로세스 전반에 이해가 높습니다.</p>
                    <p className='intro-text'>JavaScript에 관심이 많고, 관련한 라이브러리/프레임워크에도 관심이 높습니다. </p>
                    <p className="intro-text">분야에 국한되지 않고 새로운 것들을 알아가는 것에 재미를 느낍니다.</p>
                    <p className="intro-text">더 전문적인 프론트 개발자로 성장하겠습니다.</p>
                </div>
                <div className="intro-btn">
                    <button className='btn-primary btn-40'>
                        <a href="https://github.com/yum-kim" target="_blank"><i class="bi bi-github"></i>Github</a>
                    </button>
                    {/* <button className='btn-primary btn-40'>
                        <a href="https://reliable-waiter-1b0.notion.site/Dev-Study-Note-964f900745444db0bf386f75291f28d1" target="_blank">
                            <i class="bi bi-pencil-fill"></i>Notion</a>
                    </button> */}
                </div>
            </div>
        </article>
    );
};

export default Intro;