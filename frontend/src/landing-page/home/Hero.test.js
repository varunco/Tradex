import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {

  test("renders heading text", () => {
    render(<Hero />);
    
    const heading = screen.getByText(/Invest In Everything/i);
    
    expect(heading).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(<Hero />);
    
    const button = screen.getByRole("button", { name: /sign up/i });
    
    expect(button).toBeInTheDocument();
  });

  test("renders hero image", () => {
    render(<Hero />);
    
    const image = screen.getByAltText("homeHero");
    
    expect(image).toBeInTheDocument();
  });

});