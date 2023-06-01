import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../../components/header/header.component';
import { addCategoriesToStore } from '../../store/category/category.actions';
import useFetch from '../../hooks/useFetch';

const Layout = () => {
  const [data] = useFetch('http://localhost:3000/api/v1/products/categories');
  const dispatch = useDispatch();
  useEffect(() => {
    data && dispatch(addCategoriesToStore(data));
  }, [data, dispatch]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
