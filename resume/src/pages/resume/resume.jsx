import React from 'react';
import AppLayout from '../../components/AppLayout';
import './resume.scss';
import { useState } from 'react';

const Resume = () => {
    // const [isProfileHover, setIsProfileHover] = useState(false);

    return (
        <AppLayout>
            
            {/* 소개 */}
            <article className='box intro'>
                <div class="">
                    <div class="intro-title">
                        <h2 className='secondary-main-title'>안녕하세요.</h2>
                        <h2 className='main-title underline'>Front-end Developer</h2>
                        <h2 className='main-title name' onMouseEnter='replace'>김유미입니다.</h2>
                    </div>
                    <div className='intro-profile'>
                        {/* <img src={isProfileHover ? "/images/profile.jpg" : "/images/profile2.jpg"} alt="profile" onMouseEnter={() => setIsProfileHover(true)} onMouseOut={() => setIsProfileHover(false)} /> */}
                        <div></div>
                    </div>
                    <div className='intro-box'>
                        <p className='intro-text'><span className='bold'>3년차 웹 프론트엔드 개발자</span>로 프로젝트 초기 기획 단계부터 배포 후 서비스 안정화 단계까지 참여해 본 경험이 있습니다.</p>
                        <p className="intro-text">딱 떨어지는 보기 좋은 UI에 사용하기 좋은 기능을 구현하는 것을 즐깁니다. </p>
                        <p className='intro-text'>웹 퍼블리셔로 일을 시작했기 때문에, <span className='bold'>UI 구현</span>에 강점 또한 가지고 있습니다.</p>
                        <p className="intro-text">지속적으로 사내 스터디를 해왔으며, 개인적인 학습을 통해서 부족한 부분을 개선하고 새로운 것들을 알아가는 것을 좋아합니다.</p>
                        <p className="intro-text">더 전문적인 프론트 개발자로 성장하겠습니다.</p>
                    </div>
                    <div className="intro-btn">
                        <button className='btn-primary btn-40'>
                            <a href="https://github.com/yum-kim" target="_blank"><i class="bi bi-github"></i>Github</a>
                        </button>
                        <button className='btn-primary btn-40'>
                            <a href="https://reliable-waiter-1b0.notion.site/Dev-Study-Note-964f900745444db0bf386f75291f28d1" target="_blank">
                                <i class="bi bi-pencil-fill"></i>Notion</a>
                        </button>
                    </div>
                </div>
            </article>

            {/* 경력 */}
            <article className='box'>

                <span className='english-title'>Experience</span>
                <h2 className='main-title mb'>경력</h2>
                
                <div className='container'>
                    <div className='mb'>
                        <h3 className='secondary-main-title company mb'>TNH</h3>
                        <h4 className='secondary-sub-title'>Web Front-end Developer</h4>
                        <span className='additional'>2020.06 - 2022.09 (2년 4개월)</span>   
                    </div>
                    <ul>
                        <li className='item bullet'>양/한방 병의원급 EMR(전자차트) 프로그램 개발, KIMES 2022 국제 의료기기 병원 설비 전시회 출품</li>
                        <li className='item bullet'>프로젝트 시작 단계부터 웹 퍼블리셔로 참여하여 프로그램 전체 화면 60% 이상의 UI를 구현</li>
                        <li className='item bullet'>버튼, 폼, 탭 등 공통 UI에 대해 CSS 컴포넌트화를 통해 개발 속도 향상에 기여</li>
                        <li className='item bullet'>실시간 SR 처리 및 매주 기능 건의/수정 사항 리뷰를 통하여 서비스 품질 개선 경험</li>
                    </ul>
                </div>

                <div className="container">
                    <h3 className='experience-title'><span class="count">01</span>양・한방 협진병원 EMR 프로그램 (Medi-C) 개발</h3>
                    <div class='experience-box'>
                        <div className='desc'>
                            <p>양・한방 협진병원의 외래/입원을 모두 다뤄야하는 규모의 전자차트 프로그램을 개발하였습니다.</p>
                            <p>퍼블리싱과 프론트 개발을 담당해 약 2년동안 개발이 진행됐고, 배포 과정에도 함께할 수 있었습니다.</p>
                            <p>기획 및 개발 전 과정에 참여하면서 사용자에게 가기까지 프로세스에 대해 배워볼 수 있는 좋은 기회였습니다.</p>
                            <p>입사 초기에는 UI 구현만 담당하다가 곧 프론트 개발로 업무를 확장하면서 개인적으로도 큰 성장을 이루었고,<br></br>프로젝트 개발 속도 향상 및 프론트 개발자로서의 역량을 인정받으며 회사에도 기여할 수 있었습니다.</p>
                        </div>
                        <ul className='summary'>
                            <li className='item'>
                                <h4 className='quoto'>기간</h4>
                                <p>2020.06 - 2022.09 (2년 4개월)</p>
                            </li>
                            <li className='item'>
                                <h4 className='quoto'>개발 언어 / 도구</h4>
                                <p>HTML5, CSS, JavaScript(ES6), jQuery / MySQL / SVN / Slack, Jira, Zeplin</p>
                            </li>
                            <li className='item'>
                                <h4 className='quoto'>역할 / 담당</h4>
                                <p className='bullet'>HTML5, CSS3, javaScript(ES6) 기반 jQuery 사용 UI 구현</p>
                                <p className='bullet'>CSS 미디어쿼리를 사용한 반응형 웹 구현</p>
                                <p className="bullet">Axios를 사용해 백엔드 개발자와 REST API 통신 및 데이터 바인딩 작업</p>
                                <p className='bullet'>Critical Rendering Path를 고려한 렌더 최적화 코드 작성</p>
                                <p className='bullet'>건강보험, 자동차보험, 산재보험의 청구화면 개발 및 C# 개발자와 보험 청구 프로그램 연동 작업</p>
                                <p className='bullet'>외부 검체검사 위탁기관과의 검체검사 연동 작업 (랩지노믹스, Sqlab, 이원의료재단, Gclab)</p>
                            </li>
                            <li className='item'>
                                <h4 className='quoto'>투입 인원</h4>
                                <p>8명 (Front-end: 3명, Back-end: 3명, C# 개발: 2명)</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <h3 className='experience-title'><span class="count">02</span>Medi-C 어드민 페이지 개발</h3>
                    <div class='experience-box'>
                        <div className='desc'>
                            <p>프로그램 사용 고객(병원)들을 관리하기 위한 어드민 페이지를 개발하였습니다.</p>
                            <p>고객들의 세부 정보 혹은 고객별 외부 API와 연결될 정보 등 다양한 정보를 조회, 수정, 삭제 할 수 있는 관리자 페이지입니다.</p>
                            <p>백엔드 개발자 1명과 협업하여 2인 프로젝트로 진행되었습니다.</p>
                        </div>
                        <ul className='summary'>
                            <li className='item'>
                                <h4 className='quoto'>기간</h4>
                                <p>2022.07 - 2022.07 (1개월)</p>
                            </li>
                            <li className='item'>
                                <h4 className='quoto'>개발 언어 / 도구</h4>
                                <p>HTML5, CSS, JavaScript(ES6), jQuery / SVN / Slack, Jira</p>
                            </li>
                            <li className='item'>
                                <h4 className='quoto'>역할 / 담당</h4>
                                <p className='bullet'>Front-end 투입 인원 1명으로 진행된 프로젝트로 메인 프론트 담당</p>
                                <p className='bullet'>페이지 디자인부터 퍼블리싱, 프론트 개발까지 앞 단에서 필요한 작업은 전부 혼자 진행</p>
                                <p className="bullet">Axios를 사용해 백엔드 개발자와 REST API 통신 및 데이터 바인딩 작업</p>
                            </li>
                            <li className='item'>
                                <h4 className='quoto'>투입 인원</h4>
                                <p>2명 (Front-end: 1명, Back-end: 1명)</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </article>

            {/* 기술 */}
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

            {/* 협업 */}
            <article className='box'>
                <span className='english-title'>Cooperation</span>
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
                <span className='english-title'>Education</span>
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


        </AppLayout>
    );
};

export default Resume;