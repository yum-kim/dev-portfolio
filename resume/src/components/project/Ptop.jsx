import React from 'react';
import ptopLogo from '../../assets/images/ptop-logo.svg';
import { FcSearch, FcIdea } from "react-icons/fc";

const Ptop = () => {
  return (
    <article className="project-detail">
      <div className="container">
        <div className="project-detail-title">
          <img className="project-detail-title-logo" src={ptopLogo} alt="ptop 로고 이미지" />
          <h3 className='project-detail-title-name'>PTOP</h3>
          <div className='project-detail-title-summary'>
              <p><FcIdea />피드 중심의 직관적인 미니 SNS 서비스입니다.</p>
          </div>
        </div>
        <div class='project-detail-content'>
          <ul>
              <li className='project-detail-content-list'>
                  <h4 className='quoto'>포지션</h4>
                  <p className="position">Front-end</p>
              </li>
              <li className='project-detail-content-list'>
                  <h4 className='quoto'>기술 스택</h4>
                  <div className="stack fe">
                    <p className="position">💄 Front-end</p>
                    <div>
                      <span className="stack-list">React</span>
                      <span className="stack-list">Next.js</span>
                      <span className="stack-list">TypeScript</span>
                    </div>
                    <div>
                      <span className="stack-list">Redux-toolkit</span>
                      <span className="stack-list">Redux-saga</span>
                    </div>
                    <div>
                      <span className="stack-list">CSS Modules</span>
                      <span className="stack-list">SCSS</span>
                      <span className="stack-list">react-icons</span>
                    </div>
                    <div>
                      <span className="stack-list">Github Actions</span>
                    </div>
                    <div>
                      <span className="stack-list">AWS S3</span>
                      <span className="stack-list">AWS CloudFront</span>
                    </div>
                    <div>
                      <span className="stack-list">socket.io-client</span>
                    </div>
                  </div>
                  <div className="stack be">
                    <p className="position">💾 Back-end</p>
                    <div>
                        <span className="stack-list">Node</span>
                        <span className="stack-list">Nest.js</span>
                        <span className="stack-list">Typescript</span>
                    </div>
                    <div>
                        <span className="stack-list">PostgreSQL</span>
                    </div>
                    <div>
                        <span className="stack-list">docker</span>
                        <span className="stack-list">AWS EC2</span>
                    </div>
                    <div>
                        <span className="stack-list">socket.io</span>
                    </div>
                  </div>
            </li>
            <li className='project-detail-content-list'>
              <h4 className='quoto'>데모 미리보기</h4>
              <img className="demo-img" src="https://github.com/yum-kim/P2P/assets/61794233/0384d514-2433-4222-af98-49015e192f46" alt="게시물 업로드 시연 영상"/>
              <p className="caption">게시물 업로드</p>
              <p className="highlight"><FcSearch /><a href="https://github.com/yum-kim/P2P" target="_blank">Github Repo</a>에서 구체적인 기능 명세와 데모를 확인하실 수 있습니다.</p>
            </li>
            <li className='project-detail-content-list'>
              <h4 className='quoto'>개발 이야기, 이슈 혹은 새로 알게된 점</h4>
              <dl>
                <dt>📌 권한 로직 구현 과정의 이슈</dt>

                <dd className="bullet">배경: 처음에는 accessToken만을 사용한 인증 방식을 유지했는데, 보안을 위한 선택으로 클라이언트에서 user 상태를 스크립트 내에 보관하고 있는 점 때문에 사용자가 페이지 자체를 새로고침해서 들어오게 되면 user 정보가 날아가 다시 로그인을 계속 해야하는 불편함이 있었습니다. <br />또한, 서버에서 header 내 set-Cookie 값으로 refreshToken 값을 넣어준 부분은 확인 됐으나 브라우저 쿠키 저장소에 저장이 되지 않는 이슈가 있었습니다.</dd>
                <dd className="bullet">해결: user 정보 리셋으로 인한 사용성 저하로 인해 개발 도중 refreshToken 추가 적용을 하기로 논의했고, API 요청이 들어왔을 때 만료되지않은 refreshToken을 가지고 있다면 silent하게 accessToken을 재발급 받아 서비스를 계속 이용할 수 있도록 사용성을 높였습니다. 로그인 화면에 진입했을 때도 같은 방식으로 자동 로그인처리가 되도록 처리할 수 있었습니다. <br />또, http 환경인 현재 서비스에서는 withCredential:true 설정을 해주더라도 다른 도메인에서 쿠키값을 주고 받을 수 없었고, 결국 json payload값으로 데이터를 전달해주고, 프론트에서 직접 브라우저 저장소에 등록하여 사용하는 방법으로 적용했습니다.</dd>
                <dd className="bullet">배운점: 로직 적용 과정에서 브라우저 저장소 관련 보안 이슈들을 다시 한번 공부하며 숙지하게 됐습니다.</dd>
              </dl>
              <dl>
                <dt>📌 새로운 스크롤 페이징 방식 적용</dt>
                <dd className="bullet">배경: 이전에 프로젝트를 할 때는 스크롤 이벤트 기반의 스크롤 페이징 방식을 적용해왔습니다. 공부를 위해 다른 방식에 대해 찾아보게 됐습니다.</dd>
                <dd className="bullet">해결: Intersection Observer API 라는 웹 API가 있고, 스크롤 페이징에 많이 사용되고 있는 방법이란 것을 알게 되어 이번 프로젝트에 적용해보았습니다.</dd>
                <dd className="bullet">배운점: 이벤트 기반이 아니라는 점에서 성능 면에서 우수한 방식임을 알게됐습니다. 같은 기능을 새로운 방식으로 구현할 수 있어서 재밌고 유익했습니다.</dd>
              </dl>
              <dl>
                <dt>📌 컴포넌트 외부에서 DOM을 렌더링, React Portal 적용</dt>
                <dd className="bullet">배경: 알림 모달창을 구현하며 ReactDOM의 createPortal 메서드를 알게됐고, 컴포넌트 내에서 렌더링하게 되면, CSS 상속에 의한 이슈가 있고 이외에도 구조적인 관점에서 좋지 않은 등의 단점을 인지했습니다.</dd>
                <dd className="bullet">해결: React Portal을 사용해 모달을 컴포넌트 외부에서 독립적으로 렌더링 할 수 있었습니다.</dd>
                <dd className="bullet">배운점: Portal을 활용하는 대표적인 예시가 모달창이며, 부모 컴포넌트와 독립적으로 관리되면서 제약에서 벗어날 수 있다는 장점이 있다는걸 알게됐습니다.</dd>
              </dl>
              <dl>
                <dt>📌 새로운 페이지네이션 방식, 커서 기반 페이지네이션 적용</dt>

                <dd className="bullet">배경: 사용자가 새로운 게시물을 업로드하면 신규 데이터는 서버에서 받은 데이터와는 별개로 redux 상태값에 추가시켜 렌더링했고, 서버 데이터와 로컬 데이터 상태와의 동기화 이슈가 생겼습니다. 이전까지는 오프셋 기반의 페이지네이션을 사용했는데, 백엔드에 offset값을 직접 요청하거나 혹은 프론트 편의성을 위해 page값으로 요청하는 방식이었습니다. 여기서는 page값으로 페이지네이션을 적용하고 있었습니다. 이런 offset기반의 페이지네이션을 사용하고 있었기 때문에, 새로운 page 요청 시 중복된 데이터가 들어왔고, 컨텐츠 중심의 서비스에서 사용자가 오류라고 느낄 수 있는 부분이라 생각했습니다.</dd>
                <dd className="bullet">해결: 방법을 찾던 도중 커서 기반의 페이지네이션 방식이 있다는 것을 알았습니다. 백엔드와 논의 후 커서 기반 페이지네이션으로 방법을 변경했고 중복 데이터 fetching 문제를 해결할 수 있었습니다.</dd>
                <dd className="bullet">배운점: 서버와 클라이언트의 데이터 동기화는 안정적인 서비스 운영에 있어서도 매우 중요한 문제라고 판단했습니다. 다음 프로젝트에서는 React-Query를 적용해 볼 계획입니다.</dd>
              </dl>
              <dl>
                <dt>📌 소켓 연결이 컴포넌트가 변경될 때 마다 재연결되는 이슈</dt>
                <dd className="bullet">배경: 이벤트 기반의 채팅 기능 구현을 위해 socket.io를 사용했고, 최초 연결을 위해 처음에는 socket을 연결해 리턴시키는 custom hook으로 useSocket.ts를 만들고 최상단 app 컴포넌트 내에서 호출했습니다.
                원래의 의도는 이미 연결된 소켓이 있다면 메시지 페이지에서 이벤트 송수신에 사용하려고 했습니다. 하지만 이벤트를 송수신하려면 useSocket을 컴포넌트단에서도 다시 불러야했는데, 의도와 달리 컴포넌트 진입 시 재연결되는 이슈가 있었습니다.</dd>
                <dd className="bullet">해결: 소켓이 여러번 재연결되는 것은 비효율적이라고 판단해서 방법을 변경해, redux 스토어에 전역으로 소켓을 보관했습니다. 로그인 성공 시점에 connect, 로그아웃 시점에 disconnect dispatch시키는 방법으로 변경하여 재연결 이슈 없이 소켓을 재사용할 수 있었습니다.</dd>
                <dd className="bullet">배운점: custom hook을 통해 설계할 경우 컴포넌트별로 호출할 때마다 새로운 인스턴스가 생성된다는 사실을 간과했습니다. redux 전역 상태값으로 관리하는 방법 외에는 최초에 클래스를 생성해서 외부에서도 공유하는 방식이 있을 것 같습니다.</dd>
              </dl>
            </li>
          </ul>
          <div className="link">
            <div className="link-list">
              <p><img src={ptopLogo} alt=""/>PTOP URL</p>
              <a href="http://dqe25jv8g5qos.cloudfront.net/" target="_blank">http://dqe25jv8g5qos.cloudfront.net</a>
            </div>
            <div className="link-list">
              <p><i class="bi bi-github"></i>Github URL</p>
              <a href="https://github.com/yum-kim/P2P" target="_blank">https://github.com/yum-kim/P2P</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Ptop;