import Goals from "./Goals";
import { render, screen } from "@testing-library/react";
import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux";

const mockStore = configureMockStore();

test("goals equals store state", () => {
    const initialState = {goals: [{title: 'title'}]};
    const store = mockStore(initialState);

    render(
        <Provider store={store}>
            <Goals />
        </Provider>
    )

    expect(screen.getByText(/title/i)).toBeInTheDocument();
});