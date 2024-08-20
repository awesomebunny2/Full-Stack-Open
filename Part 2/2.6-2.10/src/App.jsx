import { useState } from 'react'
import './App.css'
import AddEntry from "./components/AddEntries"
import ViewEntries from './components/viewEntries'

const App = ({phoneBook}) => {

	const [phoneNumbers, setEntry] = useState(phoneBook);

	const [newName, setNewName] = useState('');

	const [newNumber, setNewNumber] = useState('');

	const [filter, setFilter] = useState("");

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
