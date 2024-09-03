import { useState, useEffect } from 'react'
import './App.css'
import FindCountries from './components/FindCountries';
import CountryInfo from './components/CountryInfo';

//====================================================================================================================================================
//====================================================================================================================================================
//  ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗███████╗
// ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝██╔════╝
// ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   ███████╗
// ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║
// ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   ███████║
//  ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
                                                                                          
//#region APP ----------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * The root of the application's front-end rendering
	 * @returns The front end of the application
	 */
	function App() {

	const [countriesData, setCountriesData] = useState(null);
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);


		// useEffect(() => {
		// 	API.getAll().then(countryData => {
		// 		setCountriesData(countryData);
		// 	});
		// }, []);

		const infoStyle = {
            textAlign: "left"
        };


	return (
		<>
			<div className="half-section">
				<FindCountries 
					countriesData={countriesData}
					setCountriesData={setCountriesData}
					setSelectedCountry={setSelectedCountry}
				/>
			</div>

			<div className="half-section" style={infoStyle}>
				<CountryInfo 
					selectedCountry={selectedCountry} 
					setSelectedCountry={setSelectedCountry} 
					currentWeather={currentWeather} 
					setCurrentWeather={setCurrentWeather}
				/>
			</div>
		</>

	);
	};
//#endregion -----------------------------------------------------------------------------------------------------------------------------------------

//====================================================================================================================================================
//====================================================================================================================================================


export default App