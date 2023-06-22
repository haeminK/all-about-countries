import { useRouteError } from 'react-router-dom'

import Header from "../components/UI/Header";
import Navigation from "../components/UI/Navigation";
import ErrorContent from '../components/utils/ErrorContent';

const ErrorPage = () => {
    const error = useRouteError();


    let message = "Something went wrong";

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        message = "Page Not Fount"
    }

    return <>
        <Header />
        <Navigation />
        <ErrorContent message={message} />;
    </>
};

export default ErrorPage;