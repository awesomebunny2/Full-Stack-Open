import { useEffect } from 'react'
import API from "../services/API"

//====================================================================================================================================================
//====================================================================================================================================================
//  ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗███████╗
// ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝██╔════╝
// ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   ███████╗
// ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║
// ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   ███████║
//  ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
       

//#region WEATHER INFO -------------------------------------------------------------------------------------------------------------------------------
    /**
     * Builds out the weather report for the capitol of the currently selected country
     * @param {ReadyState, ReadyState} param0 The ready state for the selectedCountry and for the currentWeather
     * @returns ReactDiv
     */
    const WeatherInfo = ({selectedCountry, currentWeather}) => {

        if (currentWeather) {

            const icon = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;

            let city;

            if (currentWeather.name !== selectedCountry.capital[0]) {
                city = `${currentWeather.name}, ${selectedCountry.capital[0]}`;
            } else {
                city = selectedCountry.capital[0];
            };

            return (
                <>
                    <h2>Weather for {city}</h2>
                    <ul>
                        <li>
                            Weather: {currentWeather.weather[0].description}
                        </li>

                        <img src={icon}/>

                        <li>
                            Current Temperature: {Math.round(currentWeather.main.temp)}˚ F
                        </li>
                        <li>
                            High for Today: {Math.round(currentWeather.main.temp_max)}˚ F
                        </li>
                        <li>
                            Low for Today: {Math.round(currentWeather.main.temp_min)}˚ F
                        </li>
                
                    </ul>
                </>
            );
        } else {
            return (<p>No weather available at this time...</p>);
        };
    
    };
//#endregion -----------------------------------------------------------------------------------------------------------------------------------------


//#region COUNTRY INFO -------------------------------------------------------------------------------------------------------------------------------
    /**
     * Renders out the selectedCountry data into the right side of the application
     * @param {ReadyState, SetStateAction, ReadyState, SetStateAction} param0 The ready state for selectedCountry and the set state for 
     * selectedCountry, as well as weather
     * @returns A div containing showing select data for the selectedCountry
     */
    const CountryInfo = ({selectedCountry, setSelectedCountry, currentWeather, setCurrentWeather}) => {

        useEffect(() => {

            if (selectedCountry && selectedCountry.capitalInfo.latlng) {
                API.weather(selectedCountry.capitalInfo.latlng[0], selectedCountry.capitalInfo.latlng[1]).then(weather => {

                    setCurrentWeather(weather);
    
                    console.log(weather);
                });
            } else {
                setCurrentWeather(null);
                console.log("No capitol coordinates available for this country, existing weather report...");
            };

        }, [selectedCountry]);



        if (selectedCountry) {


            return (
                <>
                    <div>
                        <h1>{selectedCountry.name.common}</h1>
                        <img className="flag" src={selectedCountry.flags.svg} alt={selectedCountry.flags.alt}/>
                    </div>

                    <div>
                        <h2>Capital: {selectedCountry.capital[0]}</h2>
                        <h2>Population: {(selectedCountry.population).toLocaleString()}</h2>
                        <h2>Languages:</h2> 
                        <ul>
                            {Object.values(selectedCountry.languages).map((lan) => (
                                <li key={lan}>{lan}</li>
                            ))}
                        </ul>
                    
                    </div>

                    <div>
                        <WeatherInfo selectedCountry={selectedCountry} currentWeather={currentWeather}/>
                    </div>

                </>
                
            );
        } else {
            return (
                <h2>The Country Info Will Be Here...</h2>
            );
        };

    };
//#endregion -----------------------------------------------------------------------------------------------------------------------------------------

//====================================================================================================================================================
//====================================================================================================================================================


export default CountryInfo