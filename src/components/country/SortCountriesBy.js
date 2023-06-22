import classes from './SortCountriesBy.module.css';

const SortBySelector = props => {

    const dropDownChangeHandler = (event) => {
        props.onChangeSortBy(event.target.value);
    };

    return (
        <div className={classes['sort-by']}>
            <label>Sort By</label>
            <select onChange={dropDownChangeHandler}>
                <option value="ALPHABET">Alphabet</option>
                <option value="POPULATION">Population</option>
                <option value="SURFACE-AREA">Surface Area</option>
            </select>
        </div>
    )
};

export default SortBySelector