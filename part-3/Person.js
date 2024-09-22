// Person Component
// Properties: Name, Age, Hobbies
const Person = (props) => {
    let name = props.name;
    if (name.length > 8) {
        name = name.substring(0, 6);
    }
    let canVote = "Please Go Vote!";
    if (props.age < 18) {
        canVote = "Must be 18";
    }
    let hobbies = props.hobbies.map( hobby => <li>{hobby}</li>)
    return (
        <div>
            <h1>{name} </h1>
            <p> Learn some information about this person.</p>
            <h3> {canVote} </h3>
            <h3>Hobbies:</h3>
            <ul> {hobbies} </ul>
        </div>
    )
}