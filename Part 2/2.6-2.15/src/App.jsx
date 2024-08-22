import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import AddEntry from "./components/AddEntries"
import ViewEntries from './components/viewEntries'
import phoneBookService from "./services/phoneBook"

const App = () => {

	const [phoneNumbers, setEntry] = useState([]);

	const [newName, setNewName] = useState('');

	const [newNumber, setNewNumber] = useState('');

	const [filter, setFilter] = useState("");

	//useEffect only runs after the App is rendered, and the [] at the end tells it to only run the first time the app is rendered, not any other times the app component is triggered
	useEffect(() => {
		phoneBookService.getAll().then(initialEntires => {
			setEntry(initialEntires);
		});
	}, []);

	return (
		<div>
			<h2>Phonebook</h2>

			<AddEntry name={newName} number={newNumber} setName={setNewName} setNumber={setNewNumber} phoneNumbers={phoneNumbers} setEntry={setEntry}/>

			<h2>Numbers</h2>

			<ViewEntries phoneNumbers={phoneNumbers} name={newName} setName={setNewName} number={newNumber} setNumber={setNewNumber} filter={filter} setFilter={setFilter}/>

		</div>
	);
};

export default App
