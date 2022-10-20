import React from 'react';
import AppLayout from '../../components/AppLayout';
import styled from 'styled-components';

const Resume = () => {
    const H1 = styled.h1`
        font-size: var(--primary-font-size);
        margin-bottom: 1.25rem;
    `;

    return (
        <AppLayout>
            <H1>김유미</H1>
            <span>2년 차 웹 front-end 개발자로 프로젝트 초기 기획 단계부터 배포 후 서비스 안정화 단계까지 참여해 본 경험이 있습니다.<br></br>웹 퍼블리셔로 일을 시작했고, 이후 프론트 개발자로 업무를 확장하며 필요한 자질들을 꾸준히 쌓아왔습니다.<br></br>최적의 사용성을 고려한 UI 구현을 좋아합니다.</span>
        </AppLayout>
    );
};

export default Resume;