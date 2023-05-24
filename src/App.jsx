import { Routes, Route } from 'react-router';
import React, { Suspense } from 'react';

import './App.css';

import Layout from './pages/layout/layout.component';
import Home from './pages/home/home.component';
import Loader from './components/loader/loader.component';

const Cart = React.lazy(() => import('./pages/cart/cart.component'));
const Categories = React.lazy(() =>
    import('./pages/categories/categories.component')
);
const Contact = React.lazy(() => import('./pages/contact/contact.component'));
const FAQ = React.lazy(() => import('./pages/faq/faq.component'));
const Login = React.lazy(() => import('./pages/login/login.component'));
const Product = React.lazy(() => import('./pages/product/product.component'));
const Search = React.lazy(() => import('./pages/search/search.component'));
const Signup = React.lazy(() => import('./pages/signup/signup.component'));
const NotFound = React.lazy(() =>
    import('./pages/notfound/notfound.component')
);

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path='cart'
                    element={
                        <Suspense fallback={<Loader />}>
                            <Cart />
                        </Suspense>
                    }
                />
                <Route
                    path='categories'
                    element={
                        <Suspense>
                            <Categories />
                        </Suspense>
                    }
                />
                <Route
                    path='contact'
                    element={
                        <Suspense>
                            <Contact />
                        </Suspense>
                    }
                />
                <Route
                    path='faq'
                    element={
                        <Suspense>
                            <FAQ />
                        </Suspense>
                    }
                />
                <Route
                    path='login'
                    element={
                        <Suspense>
                            <Login />
                        </Suspense>
                    }
                />
                <Route
                    path='product'
                    element={
                        <Suspense>
                            <Product />
                        </Suspense>
                    }
                />
                <Route
                    path='search'
                    element={
                        <Suspense>
                            <Search />
                        </Suspense>
                    }
                />
                <Route
                    path='signup'
                    element={
                        <Suspense>
                            <Signup />
                        </Suspense>
                    }
                />
                <Route
                    path='*'
                    element={
                        <Suspense>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
