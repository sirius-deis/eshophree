import { render, screen } from "@testing-library/react";

import Menu from "./menu.component";

describe("Menu component", () => {
    it("should render menu component", () => {
        render(<Menu />);
        expect(screen.getAllByRole("listitem")).toHaveLength(3);
        expect(screen.getByText(/^£\d+\.\d{2}$/)).toBeInTheDocument();
    });
});
