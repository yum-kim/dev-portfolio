import React from 'react';

const Cooperation = () => {
    return (
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
    );
};

export default Cooperation;