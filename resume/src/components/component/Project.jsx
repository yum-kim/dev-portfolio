import React from 'react';
import Card from '../project/Card';
import ptopThumnail from '../../assets/images/thumnail.png';
import ptopLogo from '../../assets/images/ptop-logo.svg';
import { useCallback } from 'react';
import { useState } from 'react';
import Modal from '../common/Modal';
import { useRef } from 'react';
import Ptop from '../project/Ptop';

const Project = () => {
    const ptopStacks = ['React', 'Next.js', 'TypeScript', 'Redux', 'SCSS', 'AWS S3', 'AWS CloudFront'];
    const [isShowModal, setIsShowModal] = useState(false);
    const ptopRef = useRef(null);
    const onCloseModal = useCallback(() => {
        setIsShowModal(false);
    }, []);

    const onClickDetailModal = useCallback((e) => {
        setIsShowModal(true);
    }, []);

    return (
        <article className='box'>
            <span className='english-title'>Project</span>
            <h2 className='main-title mb'>프로젝트</h2>
            <div className="">
                <Card
                    onClick={onClickDetailModal}
                    ref={ptopRef}
                    thumnail={ptopThumnail}
                    logo={ptopLogo}
                    title="PTOP (People To People)"
                    desc="미니 SNS 서비스"
                    stacks={ptopStacks}
                />
            </div>
            {isShowModal && (
                <Modal onClose={onCloseModal}>
                    <Ptop />
                </Modal>
            )}
        </article>
    );
};

export default Project;