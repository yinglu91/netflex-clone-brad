import ContentTabs from './ContentTabs';
import Contents from './Contents';
import { useState } from 'react';

const Home = () => {
  const [tabNum, setTabNum] = useState(3);

  return (
    <>
      <ContentTabs tabNum={tabNum} setTabNum={setTabNum} />
      <Contents tabNum={tabNum} />
    </>
  );
};

export default Home;
