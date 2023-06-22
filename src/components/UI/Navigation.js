import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = () => {
    // navigation including link to Home and Discussion page
    return (
        <nav>
            <ul className={classes['nav-list']}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            (isActive ? classes.active : undefined)
                        }>
                        <div>Home</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/discussion"
                        className={({ isActive }) =>
                            (isActive ? classes.active : undefined)
                        }>
                        <div>Discussion</div>
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
};

export default Navigation;