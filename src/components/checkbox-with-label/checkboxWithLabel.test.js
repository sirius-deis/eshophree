import { render, screen, fireEvent } from "@testing-library/react";

import CheckBoxWithLabel from "./checkboxWithLabel.component";

describe("CheckBoxWithLabel", () => {
    const fn = jest.fn();
    it("should render component", () => {
        render(
            <CheckBoxWithLabel checked={true} error="" handler={fn}>
                <p>Some text</p>
            </CheckBoxWithLabel>
        );
        expect(screen.getByText("Some text")).toBeInTheDocument();
    });
    it("should render component which is checked", () => {
        render(
            <CheckBoxWithLabel checked={true} error="" handler={fn}>
                <p>Some text</p>
            </CheckBoxWithLabel>
        );
        expect(screen.getByRole("checkbox")).toBeChecked();
    });
    it("should render component with error", () => {
        render(
            <CheckBoxWithLabel checked={true} error="some error" handler={fn}>
                <p>Some text</p>
            </CheckBoxWithLabel>
        );
        expect(screen.getByText(/some error/)).toBeInTheDocument();
    });
    it("should fire an event on click", () => {
        render(
            <CheckBoxWithLabel checked={true} error="some error" handler={fn}>
                <p>Some text</p>
            </CheckBoxWithLabel>
        );
        fireEvent.click(screen.getByRole("checkbox"));
        expect(fn).toBeCalled();
    });
    it("should fire an event on click and pass false to function", () => {
        render(
            <CheckBoxWithLabel checked={true} error="some error" handler={fn}>
                <p>Some text</p>
            </CheckBoxWithLabel>
        );
        fireEvent.click(screen.getByRole("checkbox"));
        expect(fn).toBeCalledWith(false);
    });
    it("should fire an event on click and pass true to function", () => {
        render(
            <CheckBoxWithLabel checked={false} error="some error" handler={fn}>
                <p>Some text</p>
            </CheckBoxWithLabel>
        );
        fireEvent.click(screen.getByRole("checkbox"));
        expect(fn).toBeCalledWith(true);
    });
});
