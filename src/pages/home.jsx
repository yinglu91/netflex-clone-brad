import { useState } from 'react';
import Navbar from '../components/Navbar'
import Banner from '../components/home/Banner'
import ContentTabs from '../components/home/ContentTabs';
import Contents from '../components/home/Contents';


const Home = () => {
  const [tabNum, setTabNum] = useState(1);

  return (
    <>
      <header className="showcase">
        <Navbar />
        <Banner />
      </header>
      
      <ContentTabs tabNum={tabNum} setTabNum={setTabNum} />
      <Contents tabNum={tabNum} />
    </>
  );
};

export default Home;
