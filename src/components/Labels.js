import './Labels.css';

import { useEffect, useState } from "react"
import store from "../store"
import Label from "./Label";

const Labels = () => {
    const [labels, setLabels] = useState(store.getState().labels);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setLabels(store.getState().labels);
        })

        return () => unsubscribe();
    })

    return (
        <div className="secondary" id="labels">
            {labels.map((label) => (
                <Label title={label.title} color={label.color} key={label.key} Key={label.key} />
            ))}
        </div>
    )
}

export default Labels;