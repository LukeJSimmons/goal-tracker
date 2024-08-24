import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test('homepage renders goals', () => {
    render(<HomePage />);
    const goals = screen.getByTestId(/goals/i);
    expect(goals).toBeInTheDocument();
})