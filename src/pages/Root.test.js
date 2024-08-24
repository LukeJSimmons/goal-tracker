import { render, screen } from "@testing-library/react";
import Root from "./Root";

test('root renders AddButton', () => {
    render(<Root />);
    const AddButton = screen.getByTestId(/addContainer/i);
    expect(AddButton).toBeInTheDocument();
});