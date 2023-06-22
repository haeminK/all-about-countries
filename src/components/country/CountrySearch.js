import classes from './CountrySearch.module.css'

const CountrySearch = props => {

    //After 0.8second since the last key press, 
    //it excecutes onChangeCountrySearch which is a filter(searching) function passed from CountryList component

    const searchInputChangeHandler = event => {
        const timerId = setTimeout(() => {
            props.onChangeCountrySearch(event.target.value);
        }, 800);

        return () => { clearTimeout(timerId) };
    };


    return (
        <div className={classes.search}>
            <input placeholder="Search..." onChange={searchInputChangeHandler} />
        </div>

    );
};

export default CountrySearch;
