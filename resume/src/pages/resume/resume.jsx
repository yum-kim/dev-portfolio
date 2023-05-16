import React from 'react';
import AppLayout from '../../components/layout/AppLayout';
import './resume.scss';
import Intro from '../../components/component/Intro';
import Experience from '../../components/component/Experience';
import Skill from '../../components/component/Skill';
import Cooperation from '../../components/component/Cooperation';
import Education from '../../components/component/Education';
import Qualification from '../../components/component/Qualification';

const Resume = () => {
    return (
        <AppLayout>
            
            {/* 소개 */}
            <Intro />

            {/* 경력 */}
            <Experience />

            {/* 기술 */}
            <Skill />

            {/* 협업 */}
            <Cooperation />

            {/* 교육사항 */}
            <Education />

            {/* 자격사항 */}
            <Qualification />
        </AppLayout>
    );
};

export default Resume;