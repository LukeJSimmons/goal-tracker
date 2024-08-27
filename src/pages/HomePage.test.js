import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { Provider } from "react-redux";
import store from "../store";

test('homepage renders goals', () => {
    render(
    <Provider store={store}>
        <HomePage />
    </Provider>
);
    const goals = screen.getByTestId(/goals/i);
    expect(goals).toBeInTheDocument();
})