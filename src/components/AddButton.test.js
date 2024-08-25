import { fireEvent, render, screen } from "@testing-library/react";
import AddButton, { add } from "./AddButton";
import userEvent from "@testing-library/user-event";

describe("addButton Rendering", () => {
    test("renders addContainer", () => {
        render(<AddButton />);
        const addContainer = screen.getByTestId(/addContainer/i);
        expect(addContainer).toBeInTheDocument();
    });
    
    test("renders addButton", () => {
        render(<AddButton />);
        const addButton = screen.getByTestId(/addButton/i);
        expect(addButton).toBeInTheDocument();
    });
    
    test("renders titleInput", () => {
        render(<AddButton />);
        const titleInput = screen.getByTestId(/titleInput/i);
        expect(titleInput).toBeInTheDocument();
    });

    test("renders dueDateInput", () => {
        render(<AddButton />);
        const dueDateInput = screen.getByTestId(/dueDateInput/i);
        expect(dueDateInput).toBeInTheDocument();
    });
    
    test("renders recurInput", () => {
        render(<AddButton />);
        const recurInput = screen.getByTestId(/recurInput/i);
        expect(recurInput).toBeInTheDocument();
    });
});

describe("AddButton Inputs", () => {
    test("titleInput value equals title", () => {
        render(<AddButton />);
        const testInput = 'test';
        const titleInput = screen.getByTestId(/titleInput/i);
        userEvent.type(titleInput, testInput);
        expect(titleInput).toHaveValue(testInput);
    });

    test("dueDateInput value equals dueDate", () => {
        render(<AddButton />);
        const testInput = '2024-01-01';
        const dueDateInput = screen.getByTestId(/dueDateInput/i);
        userEvent.type(dueDateInput, testInput);
        expect(dueDateInput).toHaveValue(testInput);
    });
    
    test("recurInput value equals recur", () => {
        render(<AddButton />);
        const testInput = '1 week';
        const recurInput = screen.getByTestId(/recurInput/i);
        userEvent.type(recurInput, testInput);
        expect(recurInput).toHaveValue(testInput);
    });

    test("add function changes showInputs when title is empty", () => {
        render(<AddButton />);

        const addButton = screen.getByTestId(/addButton/i);
        fireEvent.click(addButton);

        const addContainer = screen.getByTestId(/addContainer/i);
        expect(addContainer).toHaveClass('primary addContainer showInputs');
    })

    test("add function resets inputs when clicked", () => {
        render(<AddButton />);

        const addButton = screen.getByTestId(/addButton/i);
        const titleInput = screen.getByTestId(/titleInput/i);
        const dueDateInput = screen.getByTestId(/dueDateInput/i);
        const recurInput = screen.getByTestId(/recurInput/i);

        const testTitle = 'test';
        const testDueDate = '2024/01/01';
        const testRecur = '1 week';

        userEvent.type(titleInput, testTitle);
        userEvent.type(dueDateInput, testDueDate);
        userEvent.type(recurInput, testRecur);
        fireEvent.click(addButton);

        expect(titleInput).toHaveValue('');
        expect(dueDateInput).toHaveValue('');
        expect(recurInput).toHaveValue('');
    })
})
