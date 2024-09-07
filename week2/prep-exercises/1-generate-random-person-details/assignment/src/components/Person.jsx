const Person = ({ person }) => {
    if (!person) {
        return null;
    }

    const { name, email } = person;

    return (
        <div>
            <ul>
                <li>First name: {name.first}</li>
                <li>Last name: {name.last}</li>
                <li>Email: {email}</li>
            </ul>
        </div>
    );
};

export default Person;