import { render, screen, fireEvent } from "@testing-library/react";

import Search from "./search.component";

describe("Search component", () => {
    const props = [
        { id: 1, linkUrl: "/gaming", title: "gaming" },
        { id: 2, linkUrl: "/cameras", title: "cameras" },
        { id: 3, linkUrl: "/components", title: "components" },
        { id: 4, linkUrl: "/laptop-and-computers", title: "laptop and computers" },
    ];
    it("should render component", () => {
        render(<Search categories={props} showDropdown={false} />);
        expect(screen.getByPlaceholderText("Enter a product name")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
});
