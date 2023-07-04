import React from 'react';

const Card = ({ thumnail, logo, title, desc, stacks, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-thumnail">
        <img src={thumnail} alt="썸네일 이미지" />
      </div>
      <div className="card-content">
        <div className="top">
          <img src={logo} alt="로고 이미지" className="logo-img" />
          <div>
            <h2 className="title">{title}</h2>
            <p className="desc">{desc}</p>
          </div>
        </div>
        {stacks.map((code) => (
            <span className="stack-list">{code}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;