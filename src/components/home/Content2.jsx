import React from 'react';
import content21Png from '../../images/tab-content-2-1.png';
import content22Png from '../../images/tab-content-2-2.png';
import content23Png from '../../images/tab-content-2-3.png';

const Content2 = () => {
  return (
    <>
      <div className="tab-2-content-top">
        <p className="text-lg">
          Watch TV shows and movies anytime, anywhere — personalized for you.
        </p>
        <a href="#" className="btn btn-lg">
          Watch Free For 30 Days
        </a>
      </div>
      <div className="tab-2-content-bottom">
        <div>
          <img src={content21Png} alt="" />
          <p className="text-md">Watch on your TV</p>
          <p className="text-dark">
            Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players
            and more.
          </p>
        </div>
        <div>
          <img src={content22Png} alt="" />
          <p className="text-md">Watch instantly or download for later</p>
          <p className="text-dark">
            Available on phone and tablet, wherever you go.
          </p>
        </div>
        <div>
          <img src={content23Png} alt="" />
          <p className="text-md">Use any computer</p>
          <p className="text-dark">Watch right on Netflix.com.</p>
        </div>
      </div>
    </>
  );
};

export default Content2;
