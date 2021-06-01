import React from 'react';

const ContentTabs = ({ tabNum, setTabNum }) => {
  console.log(tabNum);
  return (
    <section className="tabs">
      <div className="container">
        <div
          className={tabNum === 1 && 'tab-border'}
          onClick={() => setTabNum(1)}
        >
          <i className="fas fa-door-open fa-3x"></i>
          <p className="hide-sm">Cancel at any time</p>
        </div>
        <div
          className={tabNum === 2 && 'tab-border'}
          onClick={() => setTabNum(2)}
        >
          <i className="fas fa-tablet-alt fa-3x"></i>
          <p className="hide-sm">Watch anywhere</p>
        </div>
        <div
          className={tabNum === 3 && 'tab-border'}
          onClick={() => setTabNum(3)}
        >
          <i className="fas fa-tags fa-3x"></i>
          <p className="hide-sm">Pick your price</p>
        </div>
      </div>
    </section>
  );
};

export default ContentTabs;
