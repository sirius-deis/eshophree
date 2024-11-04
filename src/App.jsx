import { Routes, Route, Navigate } from 'react-router';
import React, { Suspense } from 'react';

import './App.css';

import RootLayout from './layouts/rootLayout';
import Home from './pages/home/home';
import Spinner from './components/spinner/spinner';
import AccountDetails from './components/accoundDetails/accountDetails';
import Dashboard from './components/dashboard/dashboard';

const CenteredLayout = React.lazy(() => import('./layouts/centeredLayout'));
const Cart = React.lazy(() => import('./pages/cart/cart'));
const Contact = React.lazy(() => import('./pages/contact/contact'));
const FAQ = React.lazy(() => import('./pages/faq/faq'));
const Login = React.lazy(() => import('./pages/login/loginPage'));
const Product = React.lazy(() => import('./pages/product/product'));
const ShopPage = React.lazy(() => import('./pages/shop/shop'));
const SignUpPage = React.lazy(() => import('./pages/signup/signupPage'));
const Profile = React.lazy(() => import('./pages/profile/profile'));
const NotFound = React.lazy(() => import('./pages/notfound/notfound'));
const Logout = React.lazy(() => import('./pages/logout/logout'));

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
        >
          <Route index element={
            <Suspense fallback={<Spinner />}>
              <Dashboard />
            </Suspense>
          } />
          <Route path='orders' element={
            <Suspense fallback={<Spinner />}>
              <Orders />
            </Suspense>
          } />
          <Route path='account-details' element={
            <Suspense fallback={<Spinner />}>
              <AccountDetails />
            </Suspense>
          } />
        </Route>
        <Route
          path='product'
          element={
            <Suspense fallback={<Spinner />}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path='shop/*'
          element={
            <Suspense fallback={<Spinner />}>
              <ShopPage />
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
          path='logout'
          element={
            <Suspense fallback={<Spinner />}>
              <Logout />
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
