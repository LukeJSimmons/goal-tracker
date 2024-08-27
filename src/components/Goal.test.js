import { fireEvent, render, screen } from "@testing-library/react";
import Goal from "./Goal";

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { jest } from '@jest/globals';

const mockStore = configureStore([]);

test("renders goal", () => {
    render(<Goal />);
    const goal = screen.getByTestId('goal');
    expect(goal).toBeInTheDocument();
});
