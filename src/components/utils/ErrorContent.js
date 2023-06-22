import classes from './ErrorContent.module.css';

const ErrorContent = ({ message }) => {
    return <h1 className={classes.message}>{message}</h1>
};

export default ErrorContent;