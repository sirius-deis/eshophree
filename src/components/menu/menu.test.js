import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";

import { store } from "../../store/store";

import Menu from "./menu.component";

describe("Menu component", () => {
    it("should render menu component", () => {
        render(
            <Provider store={store}>
                <Menu />
            </Provider>
        );
        expect(screen.getAllByRole("listitem")).toHaveLength(3);
        expect(screen.getByText(/^£\d+\.\d{2}$/)).toBeInTheDocument();
    });
});
