import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer component", () => {
  it("should match snapshot", function () {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
})