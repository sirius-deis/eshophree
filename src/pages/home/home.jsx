import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Hero from '../../components/hero/hero';
import DealSection from '../../components/deal-section/dealSection';
import Carousel from '../../components/carousel/carousel';
import CategoryItem from '../../components/category-item/categoryItem';
import BannerContainer from '../../components/banner-container/bannerContainer';
import HotSection from '../../components/hot-section/hotSection';
import Background from '../../assets/images/hot_bg.jpg';
import TrendingSection from '../../components/trending-section/trendingSection';
import BestSellersSection from '../../components/best-sellers-section/bestSellersSection';
import SmartHomeSection from '../../components/smart-home-section/smartHomeSection';
import ComposedSection from '../../components/composed-section/composedSection';
import RecentlyViewedSection from '../../components/recently-viewed-section/recentlyViewedSection';

const banners = [
  { image: 'https://source.unsplash.com/random/300×650?advertisment' },
  { image: 'https://source.unsplash.com/random/300×650?advertisment' },
  { image: 'https://source.unsplash.com/random/300×650?advertisment' },
];

const Home = () => {
  const { categories } = useSelector((state) => state.category);
  return (
    <main>
      <div className='container--colored'>
        <Hero />
      </div>

      <div className='container' style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <DealSection />
        <Carousel title='Product category' amount={7}>
          {categories.map((category) => (
            <Link key={category._id} to={`/shop/${category._id}`}>
              <CategoryItem>
                <img src={category.image} alt='category' />
                <p>{category.name}</p>
              </CategoryItem>
            </Link>
          ))}
        </Carousel>
        <TrendingSection />
        <BannerContainer banners={banners} />
        <BestSellersSection />
      </div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='container'>
          <HotSection />
        </div>
      </div>
      <div className='container' style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <SmartHomeSection />
        <BannerContainer banners={banners.slice(0, 2)} />
        <ComposedSection />
        <RecentlyViewedSection />
      </div>
    </main>
  );
};

export default Home;
