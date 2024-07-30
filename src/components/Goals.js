import { createStore } from "redux";

const reducer = (state, action) => {
    return state;
};

const store = createStore(reducer, [
    {
        title: 'title',
        desc: 'desc',
        deadline: '1/1/2000',
    },
])

const Goals = () => {
    return (<div id="goals" data-testid="goals">

    </div>);
}

export default Goals;