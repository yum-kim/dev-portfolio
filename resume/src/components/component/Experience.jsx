import React from 'react';

const Experience = () => {
    return (
        <article className='box'>
            <span className='english-title'>Experience</span>
            <h2 className='main-title mb'>경력</h2>

            <div className='container'>
                <div className='mb'>
                    <h3 className='secondary-main-title company mb'>STCLab</h3>
                    <h4 className='secondary-sub-title'>Web Front-end Agent Developer</h4>
                    <span className='additional'>2023.04 - 2023.05 (2개월)</span>   
                </div>
                <ul>
                    <li className='item bullet'>국내 제1금융권 시장 점유율 98% 및 공공 서비스 트래픽 제어 솔루션 채택</li>
                    <li className='item bullet'>솔루션을 통한 트래픽 제어 흐름을 숙지</li>
                    <li className='item bullet'>애자일 Scrum방식을 통한 업무 진행 경험</li>
                    <li className='item bullet'>배포 프로세스 경험 및 AWS S3, CloudFront를 통한 실배포</li>
                </ul>
            </div>
            <div className="container">
                <h3 className='experience-title'><span class="count">01</span>트래픽 제어 솔루션(NetFUNNEL) Web Agent 개발</h3>
                <div class='experience-box'>
                    <div className='desc'>
                        <p>대량의 트래픽 진입을 제어하여 고객사의 안정적인 서버 관리를 도와주는 솔루션 넷퍼넬의 핵심 기능인 Agent 코어 개발을 담당하였습니다.</p>
                    </div>
                    <ul className='summary'>
                        {/* <li className='item'>
                            <h4 className='quoto'>기간</h4>
                            <p>2023.04 - 2023.05 (2개월)</p>
                        </li> */}
                        <li className='item'>
                            <h4 className='quoto'>개발 언어 / 도구</h4>
                            <p>JavaScript(ES5,ES6) / AWS S3, CloudFront / Github / Figma / Slack, Jira, Confluence</p>
                        </li>
                        <li className='item'>
                            <h4 className='quoto'>역할 / 담당</h4>
                            <p className='bullet'>메인페이지의 진입 자체를 제어하는 사전 대기실(Pre-Waiting Room) 기능 개발</p>
                            <p className='bullet'>Agent QA 환경 테스트를 위한 demo 웹 페이지 관리</p>
                            <p className='bullet'>AWS S3와 CloudFront를 사용한 코드 배포</p>
                            <p className='bullet'>webpack, babel을 사용한 ES6 환경 구축</p>
                            <p className='bullet'>기존 코드의 이슈 대응 및 유지보수 작업</p>
                        </li>
                    </ul>
                </div>
            </div>

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
    );
};

export default Experience;