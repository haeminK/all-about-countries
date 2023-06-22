import { useLoaderData, json } from 'react-router-dom';

import CountryList from '../components/country/CountryList'


const CountriesPage = () => {

    //recevies all countries information and sort them alphabeetically and label with index.
    //pass it to CountryList component
    const data = useLoaderData()
    const dataList = data.map(obj => (
        {
            key: obj.name.common,
            name: obj.name.common,
            population: obj.population,
            area: obj.area,
            flagUrl: obj.flags['png']
        }))
        .sort((c1, c2) =>
            c1.name.localeCompare(c2.name))
        .map((country, index) => ({
            ...country,
            index
        }));

    return (
        <CountryList data={dataList} />
    );
};

export default CountriesPage;

// fetch whole countries information to display them all in a list.
export async function loader() {

    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,population,area,flags');
    if (!response.ok) {
        throw json({ message: "Failed to load country list" }, { status: 500 })
    };

    return response;

};
