const ShowEntry = ({entry}) => {
    return (
        <li>{entry.name}: {entry.number}</li>
    );
};

export default ShowEntry