import './AddButton.css';

import { useState } from "react";
import store from "../store";
import { v4 as uuidv4 } from "uuid";

const AddButton = () => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const [deadline, setDeadline] = useState('');

    const handleDeadlineChange = (event) => {
        setDeadline(event.target.value);
    }

    const [recur, setRecur] = useState(false);

    const handleRecurPress = () => {
        setRecur(!recur);
    }
    
    const add = () => {
        if (!title || !deadline) {
            return;
        }
        store.dispatch({
            type: 'goals/addGoal',
            payload: {title: title, deadline: deadline, id: uuidv4(), recur: recur}
        })
        setTitle('');
        setDeadline('');
        setRecur('');
    }

    return (<div>
        <input id="titleInput" data-testid="titleInput" value={title} onChange={handleTitleChange} placeholder="title"></input>
        <input id="deadlineInput" data-testid="deadlineInput" value={deadline} onChange={handleDeadlineChange} placeholder="deadline" type="date"></input>
        <button id='recurButton' className={recur ? 'clicked' : ''} onClick={handleRecurPress}>Recur</button>
        <button id="addButton" data-testid="addButton" onClick={add}>Add</button>
    </div>);
};

export default AddButton;