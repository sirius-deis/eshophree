import { render, screen } from "@testing-library/react";
import Spinner from "./spinner";

describe("Spinner component", function () {
  it("should match snapshot", function () {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
})