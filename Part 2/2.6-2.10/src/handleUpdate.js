const handleInputUpdate = (event, setName, setNumber, setFilter) => {
    console.log(event.target.value);

    if (event.currentTarget.id === "name-input") {
        setName(event.target.value);
    } else if (event.currentTarget.id === "number-input") {
        setNumber(event.target.value);
    } else if (event.currentTarget.id === "filter") {
        setFilter(event.target.value);
    }
};

export default handleInputUpdate