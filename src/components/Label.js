import './Label.css';

import store from "../store";

const Label = ({title, color, Key}) => {
    const style = {
        backgroundColor: color,
    }

    const handleClick = () => {
        store.dispatch({
            type: 'labels/deleteLabel',
            payload: Key
        });
        console.log(Key)
    }

    return (
        <div className="label" style={style}>
            <h2 onClick={handleClick}>{title}</h2>
        </div>
    )
}

export default Label;