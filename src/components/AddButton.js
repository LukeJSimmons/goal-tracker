import './AddButton.css';

import { useState } from "react";
import store from "../store";
import { v4 as uuidv4 } from "uuid";

const AddButton = () => {
    const [title, setTitle] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const [dueDate, setDueDate] = useState('');

    const handleDueDateChange = (event) => {
        setDueDate(event.target.value);
    }

    const [recur, setRecur] = useState(false);

    const handleRecurPress = () => {
        setRecur(!recur);
    }
    
    const add = () => {
        if (!title || !dueDate) {
            return;
        }
        store.dispatch({
            type: 'goals/addGoal',
            payload: {title: title, dateCreated: new Date(), dueDate: dueDate, key: uuidv4(), recur: recur}
        })
        setTitle('');
        setDueDate('');
        setRecur(false);
    }

    return (<div>
        <input id="titleInput" data-testid="titleInput" value={title} onChange={handleTitleChange} placeholder="title"></input>
        <input id="deadlineInput" data-testid="deadlineInput" value={dueDate} onChange={handleDueDateChange} placeholder="deadline" type="date"></input>
        <button id='recurButton' className={recur ? 'clicked' : ''} onClick={handleRecurPress}>Recur</button>
        <button id="addButton" data-testid="addButton" onClick={add}>Add</button>
    </div>);
};

export default AddButton;