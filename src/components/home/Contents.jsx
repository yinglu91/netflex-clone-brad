import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';

const Contents = ({ tabNum }) => {
  console.log(tabNum);

  return (
    <section className="tab-content">
      <div className="container">
        {/* Tab Content 1 */}
        {tabNum === 1 && <Content1 />}

        {/* Tab Content 2 */}
        {tabNum === 2 && <Content2 />}

        {/* Tab Content 3  */}
        {tabNum === 3 && <Content3 />}
      </div>
    </section>
  );
};

export default Contents;
