import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../store/store";

import CartDropdown from "./cartDropdown.component";

describe("CartDropdown component", () => {
    const products = [
        {
            product: {
                _id: 0,
                name: "product1",
                price: 12.4254,
                images: ["img1.png"],
            },
            quantity: 3,
        },
        {
            product: {
                _id: 1,
                name: "product2",
                price: 32.123,
                images: ["img2.png"],
            },
            quantity: 4,
        },
        {
            product: {
                _id: 2,
                name: "product3",
                price: 53.654742,
                images: ["img3.png"],
            },
            quantity: 8,
        },
    ];
    const price = products.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    it("should render component", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <CartDropdown products={products} price={price} />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.getAllByRole("listitem")).toHaveLength(3);
        expect(screen.getByText(`£${price.toFixed(2)}`)).toBeInTheDocument();
    });
});
