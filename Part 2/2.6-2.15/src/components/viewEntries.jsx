import ShowEntry from "./Entries"
import handleInputUpdate from "../handleUpdate";
import phoneBookService from "../services/phoneBook"


const ViewEntries = ({ phoneNumbers, setPhoneNumbers, name, setName, number, setNumber, filter, setFilter }) => {

    console.log("Phone Numbers:", phoneNumbers)
	const showThese = phoneNumbers.filter(item => 
        item.name.toLowerCase().includes(filter.toLowerCase())
        || item.number.toLowerCase().includes(filter.toLowerCase())
    );


	const deleteEntry = (id) => {

		const entry = phoneNumbers.find(e => e.id === id);

		if (window.confirm(`Are you sure you want to delete ${entry.name}: ${entry.number}?`)) {
			phoneBookService.deleteItem(id).then(response => {
				console.log(response);
                setPhoneNumbers(phoneNumbers.filter(entry => entry.id !== id));
			});
			console.log(`${entry.name}: ${entry.number} deleted.`);
		};

	};

    return (
        <>
            <>
                Filter: <input id="filter" onChange={(event) => handleInputUpdate(event, setName, setNumber, setFilter)}/>
            </>

            {showThese.map(phoneNumber => 
                <ShowEntry key={phoneNumber.id} entry={phoneNumber} deleteEntry={() => deleteEntry(phoneNumber.id)}/>
            )}

            <br/>
            <br/>
            <>
                <i>Debug: {name} - {number}</i>
            </>
        </>
       
    )
}

export default ViewEntries