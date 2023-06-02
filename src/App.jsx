import { Routes, Route, Navigate } from 'react-router';
import React, { Suspense } from 'react';

import './App.css';

import Layout from './pages/layout/layout.component';
import Home from './pages/home/home.component';
import Spinner from './components/spinner/spinner.component';

const Cart = React.lazy(() => import('./pages/cart/cart.component'));
const Categories = React.lazy(() => import('./pages/categories/categories.component'));
const Contact = React.lazy(() => import('./pages/contact/contact.component'));
const FAQ = React.lazy(() => import('./pages/faq/faq.component'));
const Login = React.lazy(() => import('./pages/login/login.component'));
const Product = React.lazy(() => import('./pages/product/product.component'));
const Search = React.lazy(() => import('./pages/search/search.component'));
const Signup = React.lazy(() => import('./pages/signup/signup.component'));
const Profile = React.lazy(() => import('./pages/profile/profile.component'));
const NotFound = React.lazy(() => import('./pages/notfound/notfound.component'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Navigate to='/' replace />} />
        <Route
          path='cart'
          element={
            <Suspense fallback={<Spinner />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path='categories'
          element={
            <Suspense fallback={<Spinner />}>
              <Categories />
            </Suspense>
          }
        />
        <Route
          path='contact'
          element={
            <Suspense fallback={<Spinner />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path='faq'
          element={
            <Suspense fallback={<Spinner />}>
              <FAQ />
            </Suspense>
          }
        />
        <Route
          path='/profile'
          element={
            <Suspense fallback={<Spinner />}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path='login'
          element={
            <Suspense fallback={<Spinner />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path='product'
          element={
            <Suspense fallback={<Spinner />}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path='search'
          element={
            <Suspense fallback={<Spinner />}>
              <Search />
            </Suspense>
          }
        />
        <Route
          path='signup'
          element={
            <Suspense fallback={<Spinner />}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
