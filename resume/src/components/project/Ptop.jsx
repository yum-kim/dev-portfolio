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
          <ul className=''>
              <li className='project-detail-content-list'>
                  <h4 className='quoto'>포지션</h4>
                  <p className="position">FE</p>
              </li>
              <li className='project-detail-content-list'>
                  <h4 className='quoto'>기술 스택</h4>
                  <div className="stack fe">
                    <p className="position">💄 FE</p>
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
                  </div>
                  <div className="stack be">
                    <p className="position">💾 BE</p>
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
                  </div>
            </li>
            <li className='project-detail-content-list'>
              <h4 className='quoto'>데모 미리보기</h4>
              <img src="https://github.com/yum-kim/P2P/assets/61794233/0384d514-2433-4222-af98-49015e192f46" alt="게시물 업로드 시연 영상"/>
              <p className="caption">게시물 업로드</p>
              <p className="highlight"><FcSearch /><a href="https://github.com/yum-kim/P2P" target="_blank">Github Repo</a>에서 구체적인 기능 명세와 데모를 확인하실 수 있습니다.</p>
            </li>
            <li className='project-detail-content-list'>
              <h4 className='quoto'>새롭게 알게된 점</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur quod, laudantium quae reiciendis ex perspiciatis, nobis quasi consequuntur quo dolore ipsa suscipit asperiores debitis rerum distinctio quia. Dolor, amet.</p>
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