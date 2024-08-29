//====================================================================================================================================================
//====================================================================================================================================================
//  ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗███████╗
// ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝██╔════╝
// ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   ███████╗
// ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║
// ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   ███████║
//  ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
                                                                                          
//#region COUNTRY INFO -------------------------------------------------------------------------------------------------------------------------------
    /**
     * Renders out the selectedCountry data into the right side of the application
     * @param {ReadyState, SetStateAction} param0 The ready state for selectedCountry and the set state for selectedCountry
     * @returns A div containing showing select data for the selectedCountry
     */
    const CountryInfo = ({selectedCountry, setSelectedCountry}) => {

        const infoStyle = {
            textAlign: "left"
        };

        if (selectedCountry) {
            return (
                <>
                    <div>
                        <h1>{selectedCountry.name.common}</h1>
                        <img className="flag" src={selectedCountry.flags.svg} alt={selectedCountry.flags.alt}/>
                    </div>

                    <div style={infoStyle}>
                        <h2>Capital: {selectedCountry.capital[0]}</h2>
                        <h2>Population: {selectedCountry.population}</h2>
                        <h2>Languages:</h2> 
                        <ul>
                            {Object.values(selectedCountry.languages).map((lan) => (
                                <li key={lan}>{lan}</li>
                            ))}
                        </ul>
                    
                    </div>

                </>
                
            );
        } else {
            return (
                <h1>The country info will be here</h1>
            );
        };

    };
//#endregion -----------------------------------------------------------------------------------------------------------------------------------------

//====================================================================================================================================================
//====================================================================================================================================================


export default CountryInfo