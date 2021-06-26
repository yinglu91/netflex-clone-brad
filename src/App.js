import { useState } from 'react';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ContentTabs from './components/contents/ContentTabs';
import Contents from './components/contents/Contents';
import Footer from './components/Footer';

function App() {
  const [tabNum, setTabNum] = useState(1);

  return (
    <>
      <header className="showcase">
        <Navbar />
        <Banner />
      </header>

      <ContentTabs tabNum={tabNum} setTabNum={setTabNum} />
      <Contents tabNum={tabNum} />

      <Footer />
    </>
  );
}

export default App;
