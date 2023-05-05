import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import React, { Suspense } from 'react';

import './App.css';
import useFetch from './hooks/useFetch';
import { signIn } from './store/user/user.actions';
import { addItems } from './store/cart/cart.actions';

import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Loader from './components/loader/loader.component';

const SignInAndSignUp = React.lazy(() =>
    import('./pages/login/signIn-and-signUp')
);
const Products = React.lazy(() => import('./pages/products/products'));
const NotFound = React.lazy(() =>
    import('./pages/not-found/notFound.component')
);

function App() {
    const dispatch = useDispatch();
    const [data, isLoading, error] = useFetch(
        'http://localhost:3000/api/v1/users/grab'
    );
    if (data?.data.user) {
        dispatch(signIn(data.data.user));
        dispatch(addItems(data.data.cart.products));
    }
    return isLoading ? (
        <Loader size={20} />
    ) : (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/login'
                    element={
                        <Suspense fallback={<Loader size={20} />}>
                            <SignInAndSignUp />
                        </Suspense>
                    }
                />
                <Route
                    path='/shop'
                    element={
                        <Suspense fallback={<Loader size={20} />}>
                            <Products />
                        </Suspense>
                    }
                />
                <Route
                    path='*'
                    element={
                        <Suspense fallback={<Loader />}>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
