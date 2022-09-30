import { useEffect, useState } from "react";

function PeopleListItem(props) {
  const { person } = props;

  const [homeworld, setHomeworld] = useState('');

  console.log("home", person)
  
  useEffect(() => {
    const { homeworld } = person;

    console.log("effect home", homeworld);

    if (homeworld) {
      fetch(homeworld)
        .then((res) => res.json())
        .then((data) => setHomeworld(data));
    }
  }, [person]);

  return (
    <ul>
      <li>{person.name} - Homeworld: {homeworld.name}</li>
    </ul>
  );
}

export default PeopleListItem;
