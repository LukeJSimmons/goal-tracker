import { render, screen } from "@testing-library/react";
import Root from "./Root";

test('root renders footer', () => {
    render(<Root />);
    const footer = screen.getByTestId(/footer/i);
    expect(footer).toBeInTheDocument();
});

test('footer contains home button', () => {
    render(<Root />);
    const homeButton = screen.getByTestId(/homeButton/i);
    expect(homeButton).toBeInTheDocument();
})