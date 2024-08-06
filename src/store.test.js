import store from "./store"

test('reducer should return the initial state', () => {
    //Implement later???
})

test('Goals should be an array of objects', () => {
    let containsObjects = store.getState().goals.every(element => typeof element === "object" && element !== null && !Array.isArray(element));
    expect(Array.isArray(store.getState().goals) && containsObjects);
});

test('ADD should add a new goal to array', () => {
    const initialState = store.getState();

    const newGoal = {
        title: 'title',
        desc: 'desc',
        deadline: '1/1/2001'
    };

    store.dispatch({
        type: "goals/addGoal",
        payload: newGoal
    });

    const expectedState = {
        ...initialState,
        goals: [...initialState.goals, newGoal]
    };

    expect(store.getState()).toEqual(expectedState);
})

test('DELETE should remove goal from array', () => {
    const initialState = store.getState();

    const goal = {
        title: 'title2',
        desc: 'desc2',
        deadline: '1/1/2002',
    };

    store.dispatch({
        type: 'goals/addGoal',
        payload: goal,
    });

    store.dispatch({
        type: 'goals/deleteGoal',
        payload: goal
    });

    expect(store.getState()).toEqual(initialState);
})