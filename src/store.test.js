import configureStore from "redux-mock-store";
import goalsReducer, { goalsSlice, addGoal, deleteGoal, completeGoal, uncompleteGoal } from './components/GoalsSlice';
import { LoadData } from "./SaveHandler";

const mockStore = configureStore([]);
const initialState = [];

let store;

beforeEach(() => {
    store = mockStore(initialState);
})

test("initial state equals LoadData.goals when LoadData.goals is not null", () => {
    const initialState = goalsReducer(undefined, {type: '@@INIT'});
    if (LoadData().goals) {
        expect(initialState).toEqual(LoadData().goals);
    } else {
        expect(initialState).toEqual([]);
    }
})

test("addGoal should add new goal to array", () => {
    const goal = {key: 'goal-1', title: 'test goal'};
    store.dispatch(addGoal(goal));

    const actions = store.getActions();
    const expectedPayload = {type: 'goals/addGoal', payload: goal};
    expect(actions).toEqual([expectedPayload]);

    const newState = goalsReducer(initialState, expectedPayload);
    expect(newState).toEqual([goal]);
});

test('deleteGoal should delete key goal from array', () => {
    const initialState = [{key: 'goal-1', title: 'test goal'}];

    const goalKey = 'goal-1';
    store.dispatch(deleteGoal(goalKey));

    const actions = store.getActions();
    const expectedPayload = {type: 'goals/deleteGoal', payload: goalKey};
    expect(actions).toEqual([expectedPayload]);

    const newState = goalsReducer(initialState, expectedPayload);
    expect(newState).toEqual([]);
});

test('deleteGoal should not delete non-key goal from array', () => {
    const initialState = [{key: 'goal-1', title: 'test goal'}];

    const goalKey = 'goal-2';
    store.dispatch(deleteGoal(goalKey));

    const actions = store.getActions();
    const expectedPayload = {type: 'goals/deleteGoal', payload: goalKey};
    expect(actions).toEqual([expectedPayload]);

    const newState = goalsReducer(initialState, expectedPayload);
    expect(newState).toEqual(initialState);
});

test("completeGoal should set key goal completed to true", () => {
    const initialState = [{key: 'goal-1', completed: false}];

    const key = 'goal-1';
    store.dispatch(completeGoal(key));

    const actions = store.getActions();
    const expectedPayload = {type: 'goals/completeGoal', payload: key};
    expect(actions).toEqual([expectedPayload]);

    const newState = goalsReducer(initialState, expectedPayload);
    expect(newState).toEqual([{key: 'goal-1', completed: true}]);
});

test("completeGoal should not set non-key goal completed to true", () => {
    const initialState = [{key: 'goal-1', completed: false}];

    const key = 'goal-2';
    store.dispatch(completeGoal(key));

    const actions = store.getActions();
    const expectedPayload = {type: 'goals/completeGoal', payload: key};
    expect(actions).toEqual([expectedPayload]);

    const newState = goalsReducer(initialState, expectedPayload);
    expect(newState).toEqual(initialState);
});

test("uncompleteGoal should set key goal completed to true and set new dueDate", () => {
    const initialState = [{key: 'goal-1', dueDate: '2024-08-20', completed: true}];

    const key = 'goal-1';
    store.dispatch(uncompleteGoal({Key: key, newDueDate: '2024-08-30'}));

    const actions = store.getActions();
    const expectedPayload = {type: 'goals/uncompleteGoal', payload: {Key: key, newDueDate: '2024-08-30'}};
    expect(actions).toEqual([expectedPayload]);

    const newState = goalsReducer(initialState, expectedPayload);
    expect(newState).toEqual([{key: 'goal-1', dueDate: '2024-08-30', completed: false}]);
});

test("uncompleteGoal should not set non-key goal completed to true nor set new dueDate", () => {
    const initialState = [{key: 'goal-1', dueDate: '2024-08-20', completed: true}];

    const key = 'goal-2';
    store.dispatch(uncompleteGoal({Key: key, newDueDate: '2024-08-30'}));

    const actions = store.getActions();
    const expectedPayload = {type: 'goals/uncompleteGoal', payload: {Key: key, newDueDate: '2024-08-30'}};
    expect(actions).toEqual([expectedPayload]);

    const newState = goalsReducer(initialState, expectedPayload);
    expect(newState).toEqual(initialState);
});