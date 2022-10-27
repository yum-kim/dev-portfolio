import React from 'react';
import AppLayout from '../../components/AppLayout';
import './resume.scss';
// import styles from './resume.module.scss';

const Resume = () => {


    return (
        <AppLayout>
            
            {/* 소개 */}
            <article className='box'>
                <h2 className='main-title name'>김유미</h2>
                <h2 className='secondary-main-title'>Front-end Engineer</h2>
                <div className='intro-box'>
                    <p className='intro-text'><span className='bold'>3년 차 Web front-end 개발자</span>로 프로젝트 초기 기획 단계부터 배포 후 서비스 안정화 단계까지 참여해 본 경험이 있습니다.</p>
                    <p className='intro-text'>웹 퍼블리셔로 일을 시작했고, 이후 프론트 개발자로 업무를 확장하며 필요한 자질들을 꾸준히 쌓아왔습니다.</p>
                    <p className='intro-text'><span className='bold'>최적의 사용성을 고려한 UI 구현</span>을 좋아합니다.</p>
                </div>
                <button className='btn-primary btn-40'>Github</button>
            </article>

            {/* 경력 */}
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

                <div className="container">
                    <h3 className='experience-title'>1. 양/한방 협진병원 EMR 프로그램 (Medi-C) 개발</h3>
                    <span className='experience-desc-title'>양/한방 협진병원에서 사용하는 전자차트 프로그램</span>
                    <div class='experience-box'>
                        <div className='desc'>
                            <p>양/한방 협진병원의 외래/입원을 모두 다뤄야하는 규모의 전자차트 프로그램으로 약 2년여 동안 개발이 진행됐고, 배포 과정에도 함께할 수 있었습니다.</p>
                            <p>기획 및 개발 전 과정에 참여하면서 사용자에게 가기까지 프로세스에 대해 배워볼 수 있는 좋은 기회였습니다.</p>
                            <p>입사 초기에는 UI 구현만 담당하다가 곧 프론트 개발로 업무를 확장하면서 개인적으로도 큰 성장을 이루었고 회사에도 기여할 수 있었습니다.</p>
                        </div>
                        <ul className='summary'>
                            <li className='item bullet'>
                                <strong>기간</strong>
                                <p>2020.06 - 2022.09 (2개월 4개월)</p>
                            </li>
                            <li className='item bullet'>
                                <strong>개발 언어</strong>
                                <p>JavaScript(ES6) , HTML5, CSS, jQuery / MySQL, SVN</p>
                            </li>
                            <li className='item bullet'>
                                <strong>역할 / 담당</strong>
                                <p>HTML5, CSS3, javaScript 기반 jQuery 사용 UI 구현</p>
                                <p>미디어쿼리를 사용한 반응형 웹 디자인 구현</p>
                                <p>양방 검사 오더에 대해 검체검사 위탁기관과의 검체검사 연동 작업 (랩지노믹스, Sqlab, 이원의료재단, Gclab)</p>
                                <p>건강보험, 자동차보험, 산재보험의 청구화면 개발 및 보험 청구 프로그램 연동</p>
                                <p>Critical Rendering Path를 고려한 렌더 최적화 코드 작성</p>
                            </li>
                            <li className='item bullet'>
                                <strong>투입 인원</strong>
                                <p>8명 (Front-end: 3명, Back-end: 3명, C# 개발: 2명)</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <h3 className='experience-title'>2. Medi-C 어드민 페이지 개발</h3>
                    <span className='experience-desc-title'>병원(고객)들을 관리하기 위한 페이지</span>
                    <div class='experience-box'>
                        <div className='desc'>
                            <p>양/한방 병원 고객들을 관리하기 위한 페이지로 고객들의 세부 정보 혹은, 고객 별 외부 API와 연결될 정보 등 다양한 정보를 조회, 수정, 삭제 할 수 있는 관리자 페이지로 한달 여 시간을 기간으로 두어 작업이 진행되었습니다.</p>
                            <p>백엔드 개발자와 REST기반의 API 통신으로 데이터를 주고 받았습니다.</p>
                        </div>
                        <ul>
                            <li className='item bullet'>
                                <strong>기간</strong>
                                <p>2022.07 - 2022.07 (1개월)</p>
                            </li>
                            <li className='item bullet'>
                                <strong>개발 언어</strong>
                                <p>JavaScript(ES6), HTML5, CSS, jQuery / SVN</p>
                            </li>
                            <li className='item bullet'>
                                <strong>역할 / 담당</strong>
                                <p>front-end 투입 인원 1명으로 진행된 프로젝트로 메인 프론트 담당</p>
                                <p>페이지 디자인부터 프론트 개발까지 앞 단에서 필요한 작업은 전부 혼자 진행</p>
                            </li>
                            <li className='item bullet'>
                                <strong>투입 인원</strong>
                                <p>2명 (Front-end 1명, Back-end 1명)</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </article>

            {/* 기술 */}
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

            {/* 협업 */}
            <article className='box'>
                <h2 className='main-title mb'>협업</h2>
                <div className='container'>
                    {/* <span className='additional'>기획 및 디자인에서 의도하는 부분에 대해 존중하며 충분한 협업을 통해 이를 구현하기 위해 노력합니다.</span> */}
                    <p className='item bullet'>Slack</p>
                    <p className='item bullet'>Jira, Redmine, Notion, Google Drive</p>
                    <p className='item bullet'>SVN</p>
                    <p className='item bullet'>Zeplin</p>
                </div>
            </article>

            {/* 교육사항 */}
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

            {/* 자격사항 */}
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