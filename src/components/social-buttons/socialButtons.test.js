import { render, screen, fireEvent } from "@testing-library/react";
import SocialButtons from "./socialButtons";


describe("SocialButtons component", () => {
  const fn1 = jest.fn();
  const fn2 = jest.fn();
  const socialButtons = [{buttonContent: <div>Google</div>, onClick: fn1}, {buttonContent: <div>Facebook</div>, onClick: fn2}];
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
  it("should fire a click event on Google button", () => {
    render(<SocialButtons title="signup" buttons={socialButtons} />);
    fireEvent.click(screen.getByText("Google"));
    expect(fn1).toHaveBeenCalled();
  });
  it("should fire a click event on Facebook button", () => {
    render(<SocialButtons title="signup" buttons={socialButtons} />);
    fireEvent.click(screen.getByText(/facebook/i));
    expect(fn2).toHaveBeenCalled();
  });
});