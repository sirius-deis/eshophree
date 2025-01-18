import { render, screen, fireEvent } from "@testing-library/react";
import CheckboxWithLabel from "./checkboxWithLabel";


describe("CheckboxWithLabel component", () => {
  it("should match snapshot", function () {
    const { container } = render(<CheckboxWithLabel labelTitle="Test Checkbox" />);
    expect(container).toMatchSnapshot();
  });

  it("should contain label test", () => {
    const { getByLabelText } = render(<CheckboxWithLabel labelTitle="Test Checkbox" />);
    const checkbox = getByLabelText("Test Checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("should be checked when isChecked is true", () => {
    render(<CheckboxWithLabel labelTitle="Test Label" isChecked={true} name="testCheckbox" clickHandler={() => {}} />);
    const checkbox = screen.getByRole('checkbox', { name: /test label/i });
    expect(checkbox).toBeChecked();
  });

  it("should not be checked when isChecked is false", () => {
    render(<CheckboxWithLabel labelTitle="Test Label" isChecked={false} name="testCheckbox" clickHandler={() => {}} />);
    const checkbox = screen.getByRole('checkbox', { name: /test label/i });
    expect(checkbox).not.toBeChecked();
  });

  it("should toggle checkbox state when clicked", () => {
    const clickHandler = jest.fn();
    const { getByLabelText } = render(<CheckboxWithLabel labelTitle="Test Label" name="checkbox" clickHandler={clickHandler} />);
    const checkbox = getByLabelText("Test Label");
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});