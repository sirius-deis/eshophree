import { fireEvent, render, screen } from "@testing-library/react";
import LabelWithTextarea from "./labelWithTextarea";

describe("LabelWithTextarea component", () => {
  it("should match snapshot", () => {
    const { container } = render(<LabelWithTextarea/>);
    expect(container).toMatchSnapshot();
  })
  it("should render label with provided text", () => {
    render(<LabelWithTextarea labelText="Textarea label *" withLabel/>);
    expect(screen.getByText(/textarea label/i)).toBeInTheDocument();
  })
  it("should not render label with provided text label if withLabel is false", () => {
    render(<LabelWithTextarea labelText="Textarea label" withLabel={false}/>);
    expect(screen.queryByText("Textarea label *")).toBeNull();
  })
  it("should render the textarea with correct attributes", () => {
    render(<LabelWithTextarea labelText="Textarea label" withLabel placeholder="Enter text" 
      name="test" 
      minLength={5} 
      maxLength={50} 
      value="Test"/>)
    const textarea = screen.getByPlaceholderText(/enter text/i);
    expect(textarea).toHaveAttribute("name", "test");
    expect(textarea).toHaveAttribute("minLength", "5");
    expect(textarea).toHaveAttribute("maxLength", "50");
    expect(textarea).toHaveValue("Test")
  })
  it("should handle textarea change event", () => {
    const setValueMock = jest.fn();
    render(<LabelWithTextarea setValue={setValueMock} placeholder="Enter text" value="Test" />);
    const textarea = screen.getByPlaceholderText(/enter text/i);
    fireEvent.change(textarea, { target: {value: 'New value' }});
    expect(setValueMock).toHaveBeenCalledWith("New value");
  });
})