import { render, screen } from "@testing-library/react";
import InfoBox from "./infoBox";

describe("InfoBox component", () => {
  it("should match snapshot", function () {
    const { container } = render(<InfoBox />);
    expect(container).toMatchSnapshot();
  });
  it("should render with given props", function () {
    render(<InfoBox error="Some error"/>);
    expect(screen.getByText("Some error")).toBeInTheDocument();
  });
});