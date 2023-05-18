import { render, screen, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';

import { store } from '../../store/store';

import ProductsList from './cartList.component';

describe('ProductsList component', () => {
    const products = [
        {
            product: {
                _id: 0,
                name: 'product1',
                price: 12.4254,
                images: ['img1.png'],
            },
            quantity: 3,
        },
        {
            product: {
                _id: 1,
                name: 'product2',
                price: 32.123,
                images: ['img2.png'],
            },
            quantity: 4,
        },
        {
            product: {
                _id: 2,
                name: 'product3',
                price: 53.654742,
                images: ['img3.png'],
            },
            quantity: 8,
        },
    ];
    it('should render component', () => {
        render(
            <Provider store={store}>
                <ProductsList products={products} />
            </Provider>
        );
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
        expect(screen.getByText(products[0].quantity)).toBeInTheDocument();
        expect(screen.getByText(products[1].quantity)).toBeInTheDocument();
        expect(screen.getByText(products[2].quantity)).toBeInTheDocument();

        expect(
            screen.getByText(`£${products[0].product.price.toFixed(2)}`)
        ).toBeInTheDocument();
        expect(
            screen.getByText(`£${products[1].product.price.toFixed(2)}`)
        ).toBeInTheDocument();
        expect(
            screen.getByText(`£${products[2].product.price.toFixed(2)}`)
        ).toBeInTheDocument();
    });
});
