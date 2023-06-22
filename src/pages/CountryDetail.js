import { useLoaderData, json } from "react-router-dom";
import CountryPageItem from "../components/country/CountryPageItem";

const CountryDetailPage = () => {
    const data = useLoaderData()[0]

    return (
        <CountryPageItem countryData={data} />
    );
};

export default CountryDetailPage;

// loader function that recieve country id(country name) and fetch a selected country's infromation.
export async function loader({ params }) {
    const id = params.countryId;
    const response = await fetch('https://restcountries.com/v3.1/name/' + id + '?fullText=true');
    if (!response.ok) {
        throw json({ message: "Failed to load the country" }, { status: 500 })
    };

    return response;
};