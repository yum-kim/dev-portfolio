import React from 'react';

const Skill = () => {
    return (
        <article className='box'>
            <span className='english-title'>Skills</span>
            <h2 className='main-title mb'>기술</h2>
            <div className='container'>
                <h3 className='sub-title check'>HTML / CSS</h3>
                <p className='item bullet'>Semantic한 Markup을 지향하며, HTML의 구조를 한 눈에 파악할 수 있도록 합니다.</p>
                <p className='item bullet'>웹 표준을 준수하며, 접근성 높은 웹 페이지를 구현합니다.</p>
                <p className='item bullet'>Chrome, Safari, Firefox 등 여러 브라우저에서 동일한 화면을 볼 수 있도록 크로스 브라우징 작업이 가능합니다.</p>
                <p className='item bullet'>반응형 웹을 구현할 수 있습니다.</p>
                <p className='item bullet'>SCSS, Post CSS, Styled-component를 사용해 스타일링을 적용할 수 있습니다.</p>
            </div>
            <div className="container">
                <h3 className='sub-title check'>JavaScript</h3>
                <p className='item bullet'>ES6 문법 사용에 익숙합니다.</p>
                <p className='item bullet'>JavaScript의 동작원리를 이해하고 이를 바탕으로 코드를 작성합니다.</p>
                <p className='item bullet'>서버 API 통신과 이에 따른 비동기 처리 작업에 익숙합니다.</p>
                <p className='item bullet'>jQuery 라이브러리를 사용한 코드 작성에 익숙합니다.</p>
                <p className='item bullet'>브라우저의 렌더링 원리를 이해하고 최적화된 프론트 코드 작성을 위해 노력합니다.</p>
            </div>
            <div className="container">
                <h3 className='sub-title check'>SPA Framework</h3>
                <p className='item bullet'>실제 프로젝트에서 SPA Framework를 적용해 볼 기회는 없었으나, <br></br>관심이 높아 기존 jQuery로 작성된 실무 프로젝트 코드를 스스로 React로 리팩토링 해 본 경험이 있습니다.</p>
                <p className='item bullet'>현재 React와 Next.js를 공부 중에 있습니다.</p>
            </div>
            <div className="container">
                <h3 className='sub-title check'>Etc</h3>
                <p className='item bullet'>npm</p>
                <p className='item bullet'>postman</p>
                <p className='item bullet'>Bootstrap, Ant design</p>
            </div>
        </article>
    );
};

export default Skill;