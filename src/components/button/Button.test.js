import { render, screen } from "@testing-library/react";

import Button from "./Button.component";

describe("Button component", () => {
    it("should render element", () => {
        render(
            <Button disabled={false} rounded={true}>
                <p>Press me</p>
            </Button>
        );
        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByRole("button")).not.toBeDisabled();
        expect(screen.getByRole("button")).toHaveClass("rounded");
    });
    it("should render element with correct children inside it", () => {
        render(
            <Button disabled={true} rounded={false}>
                <p>Press me</p>
            </Button>
        );
        expect(screen.getByRole("button")).toHaveTextContent("Press me");
        expect(screen.getByRole("button")).not.toHaveClass("rounded");
    });
    it("should render element which is disabled", () => {
        render(
            <Button disabled={true} rounded={true}>
                <p>Press me</p>
            </Button>
        );
        expect(screen.getByRole("button")).toBeDisabled();
    });
});
