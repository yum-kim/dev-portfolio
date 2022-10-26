import React from 'react';
import AppLayout from '../../components/AppLayout';
import './resume.scss';
// import styles from './resume.module.scss';

const Resume = () => {


    return (
        <AppLayout>
            <article className='box'>
                <h2 className='main-title name'>김유미</h2>
                <h2 className='secondary-main-title'>Front-end Engineer</h2>
                <div className='intro-box'>
                    <p className='intro-text'><span className='bold'>2년 차 Web front-end 개발자</span>로 프로젝트 초기 기획 단계부터 배포 후 서비스 안정화 단계까지 참여해 본 경험이 있습니다.</p>
                    <p className='intro-text'>웹 퍼블리셔로 일을 시작했고, 이후 프론트 개발자로 업무를 확장하며 필요한 자질들을 꾸준히 쌓아왔습니다.</p>
                    <p className='intro-text'><span className='bold'>최적의 사용성을 고려한 UI 구현</span>을 좋아합니다.</p>
                </div>
                <button className='btn-primary btn-40'>Github</button>


            </article>
            <article className='box'>
                <h2 className='main-title mb'>경력</h2>
                <div className='container'>
                    <div className='mb'>
                        <h3 className='secondary-main-title company mb'>TNH</h3>
                        <h4 className='secondary-sub-title'>Web Front-end Developer/ publisher</h4>
                        <span className='additional'>2020.06 - 2022.09 (2년 4개월)</span>
                    </div>
                    <ul>
                        <li className='item bullet'>양/한방 병의원급 EMR(전자차트) 프로그램 개발, KIMES 2022 국제 의료기기 병원 설비 전시회 출품</li>
                        <li className='item bullet'>프로젝트 시작 단계부터 웹 퍼블리셔로 참여하여 프로그램 전체 화면 60% 이상의 UI를 구현</li>
                        <li className='item bullet'>버튼, 폼, 탭 등 공통 디자인의 UI 컴포넌트화를 통해 프론트 개발 속도 향상에 기여</li>
                        <li className='item bullet'>실시간 SR 처리 및 매주 기능 건의/수정 사항 리뷰를 통하여 서비스 품질 개선</li>
                    </ul>
                </div>
            </article>
            <article className='box'>
                <h2 className='main-title mb'>기술</h2>
                <div className='container'>
                    <h3 className='sub-title quoto'>HTML / CSS</h3>
                    <p className='item bullet'>Semantic Markup 및 HTML의 구조를 한 눈에 파악할 수 있도록 노력합니다.</p>
                    <p className='item bullet'>웹 표준을 준수하며, 접근성 높은 웹 페이지를 구현합니다.</p>
                    <p className='item bullet'>Chrome, Safari, Firefox 등 여러 브라우저에서 동일한 화면을 볼 수 있도록 크로스 브라우징 작업이 가능합니다.</p>
                    <p className='item bullet'>반응형 웹을 구현할 수 있습니다.</p>
                    <p className='item bullet'>SCSS, Post CSS, Styled-component 를 사용해 효율적인 CSS 코드를 작성할 수 있습니다.</p>
                </div>
                <div className="container">
                    <h3 className='sub-title quoto'>JavaScript</h3>
                    <p className='item bullet'>ES6 문법 사용에 익숙합니다.</p>
                    <p className='item bullet'>JavaScript의 동작원리를 이해하고 이를 바탕으로 코드를 작성하기 위해 노력합니다.</p>
                    <p className='item bullet'>서버 API 통신 작업과 이에 따른 비동기 처리 작업에 익숙합니다.</p>
                    <p className='item bullet'>jQuery 라이브러리를 사용한 코드 작성에 익숙합니다.</p>
                    <p className='item bullet'>브라우저의 렌더링 원리를 이해하고 최적화된 프론트 코드 작성을 위해 노력합니다.</p>
                </div>
                <div className="container">
                    <h3 className='sub-title quoto'>SPA Framework</h3>
                    <p className='item bullet'>실제 프로젝트에서 SPA Framework를 적용해 볼 기회는 없었으나, 관심이 높아 기존 jQuery로 작성된 실무 프로젝트 코드를 스스로 React로 리팩토링 해 본 경험이 있습니다.</p>
                    <p className='item bullet'>현재 React와 Next.js를 공부 중에 있습니다.</p>
                </div>
                <div className="container">
                    <h3 className='sub-title quoto'>Library</h3>
                    <p className='item bullet'>npm</p>
                    <p className='item bullet'>postman</p>
                    <p className='item bullet'>Bootstrap, Ant design</p>
                </div>
            </article>
            <article className='box'>
                <h2 className='main-title mb'>협업</h2>
                <div className='container'>
                    <span className='additional'>기획 및 디자인에서 의도하는 부분에 대해 존중하며 충분한 협업을 통해 이를 구현하기 위해 노력합니다.</span>
                    <p className='item bullet'>Slack</p>
                    <p className='item bullet'>Jira, Redmine, Notion, Google Drive</p>
                    <p className='item bullet'>SVN</p>
                    <p className='item bullet'>Zeplin</p>
                </div>
            </article>
            <article className='box'>
                <h2 className='main-title mb'>교육사항</h2>
                <div className='container'>
                    <ul>
                        <li className='item bullet'>
                            <p>웹 퍼블리셔(UI/UX 반응형 웹디자인) 양성과정</p>
                            <p className='additional'>2020.03 수료</p>
                        </li>
                    </ul>
                </div>
            </article>
            <article className='box'>
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


        </AppLayout>
    );
};

export default Resume;