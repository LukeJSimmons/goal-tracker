import './HomePage.css';

import Goals from "../components/Goals";
import store from "../store";
import { v4 as uuidv4 } from "uuid";

const HomePage = () => {
    const add = () => {
        store.dispatch({
            type: 'goals/addGoal',
            payload: {title: 'test', id: uuidv4()}
        })
    }

    return (<div id="homePage" data-testid="homePage">
        <Goals />
        <button id="addButton" data-testid="addButton" onClick={add}>Add</button>
    </div>);
}

export default HomePage;