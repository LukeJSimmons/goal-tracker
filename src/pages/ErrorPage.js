import './ErrorPage.css';
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    
    return (
        <div className="errorPage">
            <h1>Error!</h1>
            <h2>{error.statusText || error.message}</h2>
            <p className='fullError'>{error.stack && (
                <pre style={{whiteSpace: 'pre-wrap'}}>
                    {error.stack}
                </pre>
            )}</p>
            <h2>Sorry, an error has occured. Please refresh page or contact support.</h2>
            <a href='https://github.com/LukeJSimmons/goal-tracker/issues' target='_blank' rel='noreferrer'><h1>Contact</h1></a>
        </div>
    )
}

export default ErrorPage;