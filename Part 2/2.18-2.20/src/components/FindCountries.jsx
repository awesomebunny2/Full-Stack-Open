import { useEffect } from 'react'

import API from "../services/API"


//====================================================================================================================================================
//====================================================================================================================================================
//      ██╗███████╗    ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
//      ██║██╔════╝    ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
//      ██║███████╗    █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
// ██   ██║╚════██║    ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
// ╚█████╔╝███████║    ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
//  ╚════╝ ╚══════╝    ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝

//#region SINGLE COUNTRY DATA ------------------------------------------------------------------------------------------------------------------------
    /**
     * Retrives the data for the countryName from the API and sets the response to the selectedCountry state
     * @param {String} countryName A string representing the common name of the current country
     * @param {SetStateAction} setSelectedCountry Sets the selectedCountry state, which is the data for the single country that is returned in the 
     * basic data area to the right of the input
     */
    const singleCountryData = (countryName, setSelectedCountry) => {
        console.log("Retriving country data for ", countryName);

        API.getByName(countryName).then(country => {
            console.log("The country response data is: ", country);
            setSelectedCountry(country);
        });
        
    };
//#endregion -----------------------------------------------------------------------------------------------------------------------------------------

//#region HANDLE INPUT -------------------------------------------------------------------------------------------------------------------------------
    /**
     * Retrives the data for all the countries from the API that match the country-input area and sets the countriesData state to the response. 
     * Also nullifies both states if the input is empty
     * @param {event} event The event that triggered this function to run
     * @param {SetStateAction} setCountriesData Sets the countriesData state, which is the data for all the countries that match the country-input
     * @param {SetStateAction} setSelectedCountry Sets the selectedCountry state, which is the data for the single country that is returned in the 
     * basic data area to the right of the input
     */
    const handleInput = (event, setCountriesData, setSelectedCountry) => {

        if (document.getElementById("country-input").value === "") {
            setCountriesData(null);
            console.log("Input beith empoty!!!!!");
            setSelectedCountry(null);
        } else {
            API.getAll().then(countryData => {

                const filteredCountries = countryData.filter(item =>
                    item.name.common.toLowerCase().includes(event.target.value.toLowerCase())
                );

                setCountriesData(filteredCountries);

            });
        };

    };
//#endregion -----------------------------------------------------------------------------------------------------------------------------------------

//====================================================================================================================================================
//====================================================================================================================================================


//====================================================================================================================================================
//====================================================================================================================================================
//  ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗███████╗
// ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝██╔════╝
// ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   ███████╗
// ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║
// ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   ███████║
//  ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝

//#region FILTERED COUNTRIES -------------------------------------------------------------------------------------------------------------------------
    /**
     * Filters the country data to show buttons for each country if the results are 10 or fewer, or just automatically show the countryData if it only
     * returns 1 result
     * @param {ReadyState, SetStateAction} param0 The ready state for countriesData and the set state for selectedCountry
     * @returns Either a <p> tag or a div of buttons
     */
    const FilteredCountires = ({countriesData, setSelectedCountry}) => {

        useEffect(() => {

            if(countriesData && countriesData.length === 1) {
                singleCountryData(countriesData[0].name.common, setSelectedCountry);
            };

        }, [countriesData, setSelectedCountry]);

        if (!countriesData) {

            console.log("Input empty, showing custom text");

            return (
                <p>Type a country's name to find a match and view it's data!</p>
            );

        } else if (countriesData.length < 11) {

            if (countriesData.length > 1) {

                console.log("Ten or fewer items, will show them");
        
                return (
                    <div className="list">
                        {countriesData.map((country) => (
                            <button 
                                type="button" 
                                className="country-butt" 
                                key={country.idd.suffixes[0]} 
                                onClick={() => singleCountryData(country.name.common, setSelectedCountry)}
                            >
                                {country.name.common}
                            </button>
                        ))}
                    </div>
                );

            } else {

                console.log("Either countriesData.length is 1 or a negative number. Since it is impossible for this to be a negative number (unless something went VERY wrong), there is probably only 1 result remaining. Running the singleton protocol...");

                return (
                    <p>Only 1 country matches the search, so it's data has been populated in the Country Stats area.</p>
                );

            };

        } else {

            console.log("Too many matches, specify another filter");
            return (
                <p>Too many matches, specify another filter</p>
            );
            
        };

    };
//#endregion -----------------------------------------------------------------------------------------------------------------------------------------

//#region FIND COUNTRIES -----------------------------------------------------------------------------------------------------------------------------
    /**
     * Builds out the header, country input box, and calls the FilteredCountry component to build the rest of the left side of the app
     * @param {ReadyState, SetStateAction, SetStateAction} param0 The ready state for countriesData, the set state for setCountriesData, 
     * and the set state for setSelectedCountry
     * @returns Left side of the app
     */
    const FindCountries = ({countriesData, setCountriesData, setSelectedCountry}) => {

        return (
            <>
                <h2 className="section-title">Find Countries</h2>
                <input id="country-input" onChange={(event) => handleInput(event, setCountriesData, setSelectedCountry)}/>
                <br/>
                <FilteredCountires countriesData={countriesData} setSelectedCountry={setSelectedCountry}/>
            </>
        );

    };
//#endregion -----------------------------------------------------------------------------------------------------------------------------------------

//====================================================================================================================================================
//====================================================================================================================================================


export default FindCountries
