import { useState } from 'react'
import './App.css'
import Entry from "./components/Entries"

const App = ({phoneBook}) => {
	// const [persons, setPersons] = useState([
	// 	{ name: 'Arto Hellas' }
	// ]);


	const [phoneNumbers, setName] = useState(phoneBook);

	const [newName, setNewName] = useState('');

	const addNumber = (event) => {
		event.preventDefault();
		const newEntry = {
			name: newName,
			favorite: Math.random() < 0.5,
			id: String(phoneNumbers.length + 1)
		};

		const found = phoneNumbers.find((entry) => entry.name === newName);

		console.log(found);

		if (found) {
			alert(`${newName} is already added to the phonebook`);
		} else {
			setName(phoneNumbers.concat(newEntry));
		}

		setNewName("");

	};

	const handleInputUpdate = (event) => {
		console.log(event.target.value);
		setNewName(event.target.value);
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addNumber}>
				<div>
					name: <input defaultValue={newName} onChange={handleInputUpdate}/>
				</div>
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
				<i>Debug: {newName}</i>
			</>
		</div>
	);
};

export default App
