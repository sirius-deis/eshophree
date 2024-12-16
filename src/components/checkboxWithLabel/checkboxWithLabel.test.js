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

  it("should toggle checkbox state when clicked", () => {
    const { getByLabelText } = render(<CheckboxWithLabel labelTitle="Test Checkbox" />);
    const checkbox = getByLabelText("Test Checkbox");
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();
  });
});