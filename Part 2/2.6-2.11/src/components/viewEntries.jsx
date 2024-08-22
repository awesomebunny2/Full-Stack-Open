import ShowEntry from "./Entries"
import handleInputUpdate from "../handleUpdate";

const ViewEntries = ({ phoneNumbers, name, setName, number, setNumber, filter, setFilter }) => {

	const showThese = phoneNumbers.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()) || item.number.toLowerCase().includes(filter.toLowerCase()));

    return (
        <>
            <>
                Filter: <input id="filter" onChange={(event) => handleInputUpdate(event, setName, setNumber, setFilter)}/>
            </>

            {showThese.map(phoneNumber => 
                <ShowEntry key={phoneNumber.id} entry={phoneNumber}/>
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