import { Routes, Route, Navigate } from 'react-router';
import React, { Suspense } from 'react';

import './App.css';

import RootLayout from './layouts/rootLayout';
import Home from './pages/home/home';
import Spinner from './components/spinner/spinner';

const CenteredLayout = React.lazy(() => import('./layouts/centeredLayout'));
const Cart = React.lazy(() => import('./pages/cart/cart'));
const Contact = React.lazy(() => import('./pages/contact/contact'));
const FAQ = React.lazy(() => import('./pages/faq/faq'));
const Login = React.lazy(() => import('./pages/login/loginPage'));
const Product = React.lazy(() => import('./pages/product/product'));
const SearchPage = React.lazy(() => import('./pages/search/search'));
const SignUpPage = React.lazy(() => import('./pages/signup/signupPage'));
const Profile = React.lazy(() => import('./pages/profile/profile'));
const NotFound = React.lazy(() => import('./pages/notfound/notfound'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
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
          path='profile'
          element={
            <Suspense fallback={<Spinner />}>
              <Profile />
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
              <SearchPage />
            </Suspense>
          }
        />
        <Route
          path='/'
          element={
            <Suspense>
              <CenteredLayout />
            </Suspense>
          }
        >
          <Route
            path='login'
            element={
              <Suspense fallback={<Spinner />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path='signup'
            element={
              <Suspense fallback={<Spinner />}>
                <SignUpPage />
              </Suspense>
            }
          />
        </Route>
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
