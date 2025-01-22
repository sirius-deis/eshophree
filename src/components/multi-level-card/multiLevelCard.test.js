import { render, screen } from "@testing-library/react";
import MultiLevelCard from "./multiLevelCard";


describe("MultiLevelCard component", () => {
  it("should match snapshot", () => {
    const { container } = render(<MultiLevelCard />);
    expect(container).toMatchSnapshot();
  });
  it("should render content inside component", () => {
    render(<MultiLevelCard>
      <div>Content</div>
    </MultiLevelCard>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});