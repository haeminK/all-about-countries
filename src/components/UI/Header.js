import classes from './Header.module.css';

const Header = () => {

    return (
        <header className={classes.header}>
            <h1>All about countires</h1>
            <p>
                Learn about different countires in the world and discuss with people!!
            </p>
        </header>
    );
}

export default Header;