const ShowEntry = ({entry, deleteEntry}) => {
    return (
        <li>
            {entry.name}: {entry.number}
            <button onClick={deleteEntry}>Delete</button>
        </li>
    );
};

export default ShowEntry