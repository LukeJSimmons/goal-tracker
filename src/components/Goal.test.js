import { fireEvent, render, screen } from "@testing-library/react";
import Goal from "./Goal";

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { jest } from '@jest/globals';

const mockStore = configureStore([]);
const store = mockStore({});

test("renders goal", () => {
    render(
        <Provider store={store}>
            <Goal />
        </Provider>
    );
    const goal = screen.getByTestId('goal');
    expect(goal).toBeInTheDocument();
});

describe("handleCompleteClick", () => {
    test("if recurInterval is not null it should dispatch completeGoal", () => {
        store.dispatch = jest.fn();

        render(
            <Provider store={store}>
                <Goal Key="goal-123" recurInterval={7} />
            </Provider>
        );

        const completeButton = screen.getByTestId('completeButton');
        fireEvent.click(completeButton);

        expect(store.dispatch).toHaveBeenCalledWith({type: 'goals/completeGoal', payload: 'goal-123'});
    });

    test("if recurInterval equals null it should call handleDeleteClick", () => {
        const mockHandleDeleteClick = jest.fn();

        render(
            <Provider store={store}>
                <Goal handleDeleteClick={mockHandleDeleteClick} Key='goal-123' completed={true} />
            </Provider>
        )

        const completeButton = screen.getByTestId('completeButton');
        fireEvent.click(completeButton);

        expect(mockHandleDeleteClick).toHaveBeenCalledWith('goal-123');
    })
})

test("if deleteButton is clicked it should dispatch goals/deleteGoal with Key", () => {
    store.dispatch = jest.fn();

    render(
        <Provider store={store}>
            <Goal Key='goal-123' completed={true} />
        </Provider>
    )

    const deleteButton = screen.getByTestId('deleteButton');
    fireEvent.click(deleteButton);

    expect(store.dispatch).toHaveBeenCalledWith({type: 'goals/deleteGoal', payload: 'goal-123'});
})

test("if dueDate is in the past, task is completed, and recurInterval is not null it should dispatch uncompleteGoal with the dueDate set to next interval", () => {
    store.dispatch = jest.fn();

    let dueDate = "2024-08-20";
    const recurInterval = 7;

    render(
        <Provider store={store}>
            <Goal Key="goal-123" dueDate={dueDate} completed={true} recurInterval={recurInterval} />
        </Provider>
    )

    const newDueDate = new Date(dueDate);
    newDueDate.setDate(newDueDate.getDate() + recurInterval);

    expect(store.dispatch).toHaveBeenCalledWith({type: 'goals/uncompleteGoal', payload: {Key: 'goal-123', newDueDate: newDueDate}});
});

describe("recurInterval displays correctly as weeks or days", () => {
    test("displays days when not divisible by 7", () => {
        render(
            <Provider store={store}>
                <Goal recurInterval={5} />
            </Provider>
        )

        const recurText = screen.getByTestId('recurText');

        expect(recurText).toHaveTextContent('5 days')
    })

    test("displays weeks when divisible by 7", () => {
        render(
            <Provider store={store}>
                <Goal recurInterval={14} />
            </Provider>
        )

        const recurText = screen.getByTestId('recurText');

        expect(recurText).toHaveTextContent('2 weeks')
    })
})
