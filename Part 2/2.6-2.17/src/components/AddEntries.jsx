// const AddEntry = (props) => {
import handleInputUpdate from "../handleUpdate";
import phoneBookService from "../services/phoneBook";

const AddEntry = ({ name, number, setName, setNumber, phoneNumbers, setPhoneNumbers, setMessage, setHasError }) => {

    const addEntry = (event) => {
        event.preventDefault();
        const newEntry = {
            name: name,
            number: String(number),
            favorite: Math.random() < 0.5,
        };
    
        let nameExisting = findExisting("name", name, newEntry);
        let numberExisting = findExisting("number", number, newEntry);
    
        if (!nameExisting && !numberExisting) { //neither exist yet

            phoneBookService.create(newEntry).then(returnedEntry => {
                console.log(returnedEntry);
                setPhoneNumbers(phoneNumbers.concat(returnedEntry));

                setName("");
                setNumber("");
        
                document.getElementById("name-input").value = "";
                document.getElementById("number-input").value = "";

                setMessage(`${returnedEntry.name}: ${returnedEntry.number} was added to the Phonebook`);

                setTimeout(() => {
                    setMessage(null);
                }, 5000);

            }).catch(error => {
                // alert(error.response.data.error);
                setHasError(true);
                setMessage(error.response.data.error);
                setTimeout(() => {
                    setMessage(null);
                    setHasError(false);
                }, 5000);
                console.log(error.response.data.error);
            });

        } else if (!nameExisting && numberExisting) { //number already exists

            alert(`${numberExisting} is already added to the phonebook`);

        } else if (nameExisting && !numberExisting) { //name already exists

            const originalEntry = phoneNumbers.find((entry) => entry.name === name);

            if (window.confirm(`${nameExisting} is already added to the phonebook.\nWould you like to update the number for this record?\nOld Number: ${originalEntry.number}\nNew Number: ${newEntry.number}`)) {

                console.log(originalEntry);

                phoneBookService.update(originalEntry.id, newEntry).then(returnedEntry => {
                    console.log(returnedEntry);
                    setPhoneNumbers(phoneNumbers.map(e => e.id !== originalEntry.id ? e : returnedEntry));

                    console.log(`${name}'s phone number was updated from ${originalEntry.number} to ${newEntry.number}`);
                    setMessage(`${name}'s phone number was updated from ${originalEntry.number} to ${newEntry.number}`);

                    setTimeout(() => {
                        setMessage(null);

                    }, 5000);

                    setName("");
                    setNumber("");
                    document.getElementById("name-input").value = "";
                    document.getElementById("number-input").value = "";
                }).catch(error => {
                    console.log(error.response.data.error);

                    // document.getElementsByClassName("notification").classList.add("error");
                    setHasError(true);

                    setMessage(`${name}'s entry has already been removed from the Phonebook.`);
                    setTimeout(() => {
                        setMessage(null);

                        setHasError(false);

                        // document.getElementsByClassName("notification").classList.remove("error");

                    }, 5000);
                });


            };

        } else {
            alert(`${nameExisting}: ${numberExisting} is already added to the phonebook`);
        };


        function findExisting(property, value) {

            const foundName = phoneNumbers.find((entry) => entry[property] === value);
    
            // console.log(foundName);
    
            if (foundName) {
                // alert(`${value} is already added to the phonebook`);
                return value;
            } else {
                return false;
            };
    
        };

        
    
    };
   

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