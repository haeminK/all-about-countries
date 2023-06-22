import classes from './CountryPageItem.module.css';
import { addCommas } from '../utils/utils'

// Single country page displaying flags and country info.
const CountryPageItem = ({ countryData }) => {

    const { capital,
        languages,
        continents,
        population,
        area,
        name,
        flags
    } = countryData;

    const languagesList = languages && Object.values(languages).map(lang => <li>{lang}</li>);

    return (
        <div className={classes['country-page']}>
            <div className={classes['country-detail']}>
                <img src={flags.png} />
                <h1>{name.common}</h1>
                <ul className={classes['country-detail__datas']}>
                    {capital && <li><b>Capital:</b> {capital}</li>}
                    {languages && <li>
                        <b>Languages:</b>

                        <ul>{languagesList}</ul>
                    </li>}
                    {continents && <li><b>Continent:</b> {continents}</li>}
                    {population && <li><b>Population:</b> {addCommas(population)}</li>}
                    {area && <li><b>Surface Area:</b> {addCommas(area)} km<sup>2</sup></li>}
                </ul>
            </div>
        </div>
    )
};

export default CountryPageItem;