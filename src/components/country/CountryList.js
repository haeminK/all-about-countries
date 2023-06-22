import { useReducer, useState } from 'react';

import CountryItem from "./CountryItem";
import classes from './CountryList.module.css';
import SortBySelector from './SortCountriesBy';
import CountrySearch from './CountrySearch';

// reducer that sorts and label countries based on selected "Sort By" attribute
const countryListReducer = (state, action) => {
    switch (action.type) {
        case "ALPHABET":
            return [...state]
                .sort((c1, c2) => c1.name.localeCompare(c2.name))
                .map((country, index) => ({
                    ...country,
                    index,
                    show: null
                }));

        case "POPULATION":
            return [...state]
                .sort((c1, c2) => c2.population - c1.population)
                .map((country, index) => ({
                    ...country,
                    index,
                    show: 'population'
                }));

        case "SURFACE-AREA":
            return [...state]
                .sort((c1, c2) => c2.area - c1.area)
                .map((country, index) => ({
                    ...country,
                    index,
                    show: "area"
                }));;
    }
    throw Error('Unknown action: ' + action.type);
};

const CountryList = (props) => {
    const [countryList, dispatchCountryList] = useReducer(countryListReducer, props.data);
    const [searchTerm, setSearchTerm] = useState('');

    // on select sort by option, It dispatch action to sort the list
    const sortByChangeHandler = sortByOption => {
        dispatchCountryList({ type: sortByOption })
    };

    const countrySearchChangeHandler = typedSearchTerm => {
        setSearchTerm(typedSearchTerm);
    };

    // Filter countries so that whatever starts with searchTerm displays.
    const filteredCountryList = searchTerm === "" ? countryList :
        countryList.filter(country => country.name.toLowerCase().startsWith(searchTerm.toLowerCase().trim()));


    //sorted and filtered list of CountryItem components
    const countryItemList = filteredCountryList.map(country => (
        <CountryItem
            key={country.name}
            index={country.index}
            name={country.name}
            population={country.population}
            area={country.area}
            show={country.show}
            flagUrl={country.flagUrl}

        />
    ))


    return (
        <div className={classes.countries}>
            <div className={classes.countries__controls}>
                <SortBySelector onChangeSortBy={sortByChangeHandler} />
                <CountrySearch onChangeCountrySearch={countrySearchChangeHandler} />
            </div>

            <ul className={classes['country-list']}>
                {countryItemList.length > 0 ? countryItemList : <h1>Country Not Found</h1>}
            </ul>
        </div>
    );
};

export default CountryList;