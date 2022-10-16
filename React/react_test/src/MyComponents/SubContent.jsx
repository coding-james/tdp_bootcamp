import sampleData from "./Data/sampleData.json";
import Person from "./Person";

function SubContent() {
    return (
    <>
        {sampleData.map(person => (
            <Person key={person.id} name={person.name} city={person.address.city}/>
        ))};
    </>   
    )
}

export default SubContent;