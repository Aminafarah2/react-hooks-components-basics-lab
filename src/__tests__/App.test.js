import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", () => {
  const { container } = render(<App />);

  /*
    Uncomment the line below to see the DOM elements being returned
    by the App component in your terminal when you run the tests
  */
    
 

  // screen.debug();
  const navBarComponents=container.querySelector("nav");
  expect(container.querySelector("nav")).toBeInTheDocument();
  const homeComponents=container.querySelector("#home");
  expect(container.querySelector("#home")).toBeInTheDocument();
  const aboutComponents=container.querySelector("#about");
  expect(container.querySelector("#about")).toBeInTheDocument();
});

