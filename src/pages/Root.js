import { Outlet } from "react-router-dom"

const Root = () => {
    return (<div data-testid="root">
        <Outlet />
        <footer data-testid="footer">
            <button id="homeButton" data-testid="homeButton">Home</button>
        </footer>
    </div>)
}

export default Root;