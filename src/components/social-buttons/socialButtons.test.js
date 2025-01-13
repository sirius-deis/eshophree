import { render, screen, fireEvent } from "@testing-library/react";
import SocialButtons from "./socialButtons";


describe("SocialButtons component", () => {
  const socialButtons = [{button: <div>Google</div>, onClick: () => {}}, {button: <div>Facebook</div>, onClick: () => {}}];
  it("should match snapshot", () => {
    const { container } = render(<SocialButtons title="login" buttons={socialButtons} />);
    expect(container).toMatchSnapshot();
  });

  it("should render component with given title", () => {
    render(<SocialButtons title="signup" buttons={socialButtons} />);
    expect(screen.getByText(/signup/)).toBeInTheDocument();
  });

  it("should render component with given social buttons", () => {
    render(<SocialButtons title="signup" buttons={socialButtons} />);
    expect(screen.getByText(/google/i)).toBeInTheDocument();
    expect(screen.getByText(/facebook/i)).toBeInTheDocument();
  });
});