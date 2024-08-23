// const AddEntry = (props) => {
import handleInputUpdate from "../handleUpdate";
import phoneBookService from "../services/phoneBook";

const AddEntry = ({ name, number, setName, setNumber, phoneNumbers, setPhoneNumbers }) => {

    const addEntry = (event) => {
        event.preventDefault();
        const newEntry = {
            name: name,
            number: String(number),
            favorite: Math.random() < 0.5,
        };
    
        let nameExisting = findExisting("name", name, newEntry);
        let numberExisting = findExisting("number", number, newEntry);
    
        if (!nameExisting && !numberExisting) {

            phoneBookService.create(newEntry).then(returnedEntry => {
                console.log(returnedEntry);
                setPhoneNumbers(phoneNumbers.concat(returnedEntry));

                setName("");
                setNumber("");
        
                document.getElementById("name-input").value = "";
                document.getElementById("number-input").value = "";

            }).catch(error => {
                alert(error);
            });

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

        
    
    }
   

    return (
        <form onSubmit={addEntry}>
            <div>
                Name: <input id="name-input" defaultValue={name} onChange={(event) => handleInputUpdate(event, setName, setNumber)}/>
            </div>
            <>
                Number: <input id="number-input" defaultValue={number} onChange={(event) => handleInputUpdate(event, setName, setNumber)}/>
            </>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
    
};

export default AddEntry