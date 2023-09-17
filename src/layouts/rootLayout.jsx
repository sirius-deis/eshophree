import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { addCategoriesToStore } from '../store/category/category.actions';
import useFetch from '../hooks/useFetch';

const RootLayout = () => {
  const [data] = useFetch('products/categories');
  const dispatch = useDispatch();
  useEffect(() => {
    data && dispatch(addCategoriesToStore(data));
  }, [data, dispatch]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
