import Hero from '../../components/hero/hero';
import DealSection from '../../components/dealSection/dealSection';

const Home = () => {
  return (
    <div>
      <div className='container--colored'>
        <Hero />
        <DealSection />
      </div>
      <div className='container'></div>
    </div>
  );
};

export default Home;
