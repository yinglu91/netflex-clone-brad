import React from 'react';

const tabObjs = [
  {
    icon: 'fa-door-open',
    text: 'Cancel at any time',
  },
  {
    icon: 'fa-tablet-alt',
    text: 'Watch anywhere',
  },
  {
    icon: 'fa-tags',
    text: 'Pick your price',
  },
];

const ContentTabs = ({ tabNum, setTabNum }) => {
  console.log(tabNum);
  return (
    <section className="tabs">
      <div className="container">
        {tabObjs.map((tabObj, i) => (
          <div
            className={tabNum === i + 1 && 'tab-border'}
            onClick={() => setTabNum(i + 1)}
          >
            <i className={`fas fa-3x ${tabObj.icon}`}></i>
            <p className="hide-sm">{tabObj.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentTabs;
