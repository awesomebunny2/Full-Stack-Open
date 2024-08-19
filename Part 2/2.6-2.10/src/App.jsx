import { useState } from 'react'
import './App.css'
import Entry from "./components/Entries"

const App = ({phoneBook}) => {
	// const [persons, setPersons] = useState([
	// 	{ name: 'Arto Hellas' }
	// ]);


	const [phoneNumbers, setEntry] = useState(phoneBook);

	const [newName, setNewName] = useState('');

	const [newNumber, setNewNumber] = useState('');

	const addNumber = (event) => {
		event.preventDefault();
		const newEntry = {
			name: newName,
			number: String(newNumber),
			favorite: Math.random() < 0.5,
			id: String(phoneNumbers.length + 1)
		};

		let nameExisting = findExisting("name", newName, newEntry);
		let numberExisting = findExisting("number", newNumber, newEntry);


		if (!nameExisting && !numberExisting) {
			setEntry(phoneNumbers.concat(newEntry));

			setNewName("");
			setNewNumber("");
	
			document.getElementById("name-input").value = "";
			document.getElementById("number-input").value = "";
		};

	

		function findExisting(property, value) {

			const foundName = phoneNumbers.find((entry) => entry[property] === value);

			console.log(foundName);
	
			if (foundName) {
				alert(`${value} is already added to the phonebook`);
				return true;
			} else {
				return false;
			};
	
		};
		
	};

	const handleInputUpdate = (event) => {
		console.log(event.target.value);

		if (event.currentTarget.id === "name-input") {
			setNewName(event.target.value);
		} else if (event.currentTarget.id === "number-input") {
			setNewNumber(event.target.value);
		};
	}

	return (
		<div>
			<h2>Phonebook</h2>

			<form onSubmit={addNumber}>
				<div>
					Name: <input id="name-input" defaultValue={newName} onChange={handleInputUpdate}/>
				</div>
				<>
					Number: <input id="number-input" defaultValue={newNumber} onChange={handleInputUpdate}/>
				</>
				<div>
					<button type="submit">add</button>
				</div>
			</form>

			<h2>Numbers</h2>

			{phoneNumbers.map(phoneNumber => 
				<Entry key={phoneNumber.id} entry={phoneNumber}/>
			)}

			<br/>
			<br/>
			<>
				<i>Debug: {newName} - {newNumber}</i>
			</>
		</div>
	);
};

export default App
