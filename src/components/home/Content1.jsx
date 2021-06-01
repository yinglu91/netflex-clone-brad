import React from 'react';
import contentPng from '../../images/tab-content-1.png';

const Content1 = () => {
  return (
    <div className="tab-1-content">
      <div>
        <p className="text-lg">
          If you decide Netflix isn't for you - no problem. No commitment.
          Cancel online anytime.
        </p>
        <a href="#" className="btn btn-lg">
          Watch Free For 30 Days
        </a>
      </div>
      <img src={contentPng} alt="" />
    </div>
  );
};

export default Content1;
