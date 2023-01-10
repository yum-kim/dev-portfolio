import React from 'react';
import AppLayout from '../../components/AppLayout';
import './resume.scss';
import Intro from './intro';
import Experience from './experience';
import Skill from './skill';
import Cooperation from './cooperation';
import Education from './education';
import Qualification from './qualification';

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