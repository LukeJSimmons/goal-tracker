import './Root.css';

import { Outlet } from "react-router-dom";
import AddButton from '../components/AddButton';

const Root = () => {
    return (<div id='root' data-testid="root">
        <Outlet />
        <footer data-testid="footer">
            <AddButton />
            <button id="homeButton" data-testid="homeButton">Home</button>
        </footer>
    </div>)
}

export default Root;