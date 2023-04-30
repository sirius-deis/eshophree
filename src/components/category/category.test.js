import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Category from "./category.component";

describe("Category component", () => {
    const props = [
        { id: 0, linkUrl: "/gaming", title: "gaming" },
        { id: 1, linkUrl: "/cameras", title: "cameras" },
        { id: 2, linkUrl: "/components", title: "components" },
        { id: 3, linkUrl: "/laptop-and-computers", title: "laptop and computers" },
    ];
    it("should render component", () => {
        render(
            <BrowserRouter>
                <Category categoryList={props} />
            </BrowserRouter>
        );
        expect(screen.getAllByRole("listitem")).toHaveLength(4);
        expect(screen.getByText(/gaming/)).toBeInTheDocument();
        expect(screen.getByText(/cameras/)).toBeInTheDocument();
        expect(screen.getByText(/components/)).toBeInTheDocument();
    });

    it("should replace and with & component", () => {
        render(
            <BrowserRouter>
                <Category categoryList={props} />
            </BrowserRouter>
        );
        expect(screen.getByText("laptop & computers")).toBeInTheDocument();
    });
});
