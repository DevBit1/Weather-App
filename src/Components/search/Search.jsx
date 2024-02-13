import { useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({onSearchChange}) => {

    const[search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {     // by default the value in the search box is sent to inputValue

            try {
                const response = await fetch(`${GEO_API_URL}?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions);
                const result = await response.json();
                return (
                    {
                        options : result.data.map((city)=>{     //Here we should return an object with "options" props for loadoptions
                            return {            //This is here is predefined properties an "options" object has
                                value : `${city.longitude} ${city.latitude}`,
                                label : `${city.name}, ${city.countryCode}`,
                            }
                        })
                    }
                )
            } catch (error) {
                console.error(error);
            }
    }

    const handleSearch = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    return(
        <AsyncPaginate
            placeholder = "Search for city"
            debounceTimeout={600}
            value = {search}
            onChange={handleSearch}
            loadOptions={loadOptions}
        >

        </AsyncPaginate>
    )
}

export default Search;