import { Link } from 'react-router-dom';

import classes from './CountryItem.module.css';
import { addCommas } from '../utils/utils';


const CountryItem = props => {

    //set showing number based on a sorting attribute.
    let showingNumber = null;
    if (props.show === "population") {
        showingNumber = <span>Population: {addCommas(props.population)}</span>;
    } else if (props.show === "area") {
        showingNumber = <span>Surface area: {addCommas(props.area)}Km<sup>2</sup></span>;
    }

    return <li className={classes.country}>
        <div>
            <div className={classes.country__flag}>
                <img src={props.flagUrl}></img>
            </div>
            <div className={classes.country__name}>
                <h2>{props.index + 1}. {props.name}</h2>
            </div>
            {showingNumber && <div className={classes.country__number}>{showingNumber}</div>}
        </div>

        <Link to={`/country/${props.name}`}>Detail</Link>
    </li>
};

export default CountryItem