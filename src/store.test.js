import store from "./store"

test('reducer should return the initial state', () => {
    //Implement later???
})

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

    expect(store.getState()).toEqual({goals: [newGoal]});
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