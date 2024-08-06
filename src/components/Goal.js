import './Goal.css';

import { useState } from 'react';

const Goal = ({title, deadline, key, recur}) => {
    const [completed, setCompleted] = useState(false);

    const handleCompletedClick = () => {
        setCompleted(true);
    }

    return (
        <div className={completed ? 'goal completed' : 'goal'}>
            <div id='textContainer'>
                <h3 key={key}>{title}</h3>
                <div className='flex'>
                    <p>{deadline}</p>
                    <p>{recur ? 'Repeat' : `Don't Repeat`}</p>
                </div>
            </div>
            <button className={completed ? 'completed' : ''} onClick={handleCompletedClick}>-/</button>
        </div>
    );
}

export default Goal;