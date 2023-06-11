import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Hero from '../../components/hero/hero';
import DealSection from '../../components/dealSection/dealSection';
import Carousel from '../../components/carousel/carousel';
import { Link } from 'react-router-dom';

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    backdrop-filter: brightness(90%);
  }
  img {
    display: flex;
    padding: 1rem;
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 50%;
  }
  p {
    font-size: 2rem;
    text-align: center;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

const Home = () => {
  const categories = useSelector((store) => store.category).categories;
  return (
    <div>
      <div className='container--colored'>
        <Hero />
      </div>

      <div className='container'>
        <DealSection />
        <Carousel title='Product category' amount={6}>
          {categories.map((category) => (
            <Link to={`/shop/${category._id}`}>
              <StyledItem key={category._id}>
                <img src={category.image} alt='category' />
                <p>{category.name}</p>
              </StyledItem>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
