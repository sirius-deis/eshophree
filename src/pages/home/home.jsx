import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import Hero from '../../components/hero/hero';
import DealSection from '../../components/deal-section/dealSection';
import Carousel from '../../components/carousel/carousel';
import Card from '../../components/card/card';
import CategoryItem from '../../components/category-item/categoryItem';
import BannerContainer from '../../components/banner-container/bannerContainer';
import Banner from '../../components/banner/banner';
import HotSection from '../../components/hot-section/hotSection';

const dummy = [
  {
    image: 'https://source.unsplash.com/random/300×350?computers',
    category: 'computer',
    name: 'Some name 1',
    price: 140,
    discount: 10,
    total: 43,
    sold: 7,
    endIn: new Date('2023-06-14'),
  },
  {
    image: 'https://source.unsplash.com/random/300×350?phones',
    category: 'phone',
    name: 'Some name 2',
    price: 220,
    discount: 20,
    total: 30,
    sold: 24,
    endIn: new Date('2023-06-15'),
  },
  {
    image: 'https://source.unsplash.com/random/300×350?headphones',
    category: 'headphones',
    name: 'Some name 3',
    price: 160,
    discount: 30,
    total: 10,
    sold: 8,
    endIn: new Date('2023-06-16'),
  },
  {
    image: 'https://source.unsplash.com/random/300×350?laptops',
    category: 'laptops',
    name: 'Some name 4',
    price: 400,
    discount: 25,
    total: 10,
    sold: 4,
    endIn: new Date('2023-06-17'),
  },
  {
    image: 'https://source.unsplash.com/random/300×350?computers',
    category: 'computer',
    name: 'Some name 1',
    price: 140,
    discount: 10,
    total: 43,
    sold: 7,
    endIn: new Date('2023-06-14'),
  },
  {
    image: 'https://source.unsplash.com/random/300×350?computers',
    category: 'computer',
    name: 'Some name 1',
    price: 140,
    discount: 10,
    total: 43,
    sold: 7,
    endIn: new Date('2023-06-14'),
  },
];

const banners = [
  { image: 'https://source.unsplash.com/random/300×650?advertisment' },
  { image: 'https://source.unsplash.com/random/300×650?advertisment' },
  { image: 'https://source.unsplash.com/random/300×650?advertisment' },
];

const Home = () => {
  const categories = useSelector((store) => store.category).categories;
  const [dealProducts, isDealLoading] = useFetch('products?tags=deal_of_the_day');
  const [trendingProducts, isTrendingLoading] = useFetch('products?tags=trending');
  const [bestProducts, isBestLoading] = useFetch('products?tags=best_sellers');
  return (
    <div>
      <div className='container--colored'>
        <Hero />
      </div>

      <div className='container' style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <DealSection products={dealProducts?.products} />
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
        {!isTrendingLoading && (
          <Carousel title='Trending Products' amount={5}>
            {trendingProducts?.products.map((item, i) => (
              <Card key={i} {...item} isColumn />
            ))}
          </Carousel>
        )}
        <BannerContainer banners={banners} />
        {!isBestLoading && (
          <Carousel title='Best Sellers' amount={5}>
            {bestProducts?.products.map((item, i) => (
              <Card key={i} {...item} isColumn />
            ))}
          </Carousel>
        )}
      </div>
      <HotSection />
      <div className='container' style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Carousel
          title='Smart Home Appliances'
          banner={<Banner background='https://source.unsplash.com/random/300×650?advertisment' />}
          amount={5}
        >
          {dummy.map((item, i) => (
            <Card key={i} {...item} isColumn />
          ))}
        </Carousel>
        <BannerContainer banners={banners.slice(0, 2)} />
      </div>
    </div>
  );
};

export default Home;
