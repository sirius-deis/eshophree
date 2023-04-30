import { render, screen, fireEvent } from "@testing-library/react";

import LabelWithInput from "./labelWithInput.component";

/**
 * 
 * label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    handler: PropTypes.func,
 * 
 */

describe("LabelWithInput component", () => {
    const fn = jest.fn();
    it("should render component and check if all value are rendered in component", () => {
        render(
            <LabelWithInput
                label="some label"
                type="text"
                placeholder="some placeholder"
                value="some value"
                error=""
                handler={fn}
            />
        );
        expect(screen.getByText(/label/)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/placeholder/)).toBeInTheDocument();
        expect(screen.getByDisplayValue(/value/)).toBeInTheDocument();
    });
    it("should render component with error", () => {
        render(
            <LabelWithInput
                label="some label"
                type="text"
                placeholder="some placeholder"
                value="some value"
                error="some error"
                handler={fn}
            />
        );
        const err = screen.getByText(/error/);
        expect(err).toBeInTheDocument();
        expect(err).toHaveTextContent("some error");
    });
    it("should fire an event", () => {
        render(
            <LabelWithInput
                label="some label"
                type="text"
                placeholder="some placeholder"
                value="some value"
                error="some error"
                handler={fn}
            />
        );
        fireEvent.change(screen.getByRole("textbox"), { target: { value: "a" } });
        expect(fn).toHaveBeenCalled();
    });
    it("should fire an event 1 times", () => {
        render(
            <LabelWithInput
                label="some label"
                type="text"
                placeholder="some placeholder"
                value="some value"
                error="some error"
                handler={fn}
            />
        );
        fireEvent.change(screen.getByRole("textbox"), { target: { value: "a" } });
        expect(fn).toHaveBeenCalledTimes(1);
    });
    it("should fire an event with params", () => {
        render(
            <LabelWithInput
                label="some label"
                type="text"
                placeholder="some placeholder"
                value="some value"
                error="some error"
                handler={fn}
            />
        );
        fireEvent.change(screen.getByRole("textbox"), { target: { value: "abc" } });
        expect(fn).toHaveBeenCalledWith("abc");
    });
});
