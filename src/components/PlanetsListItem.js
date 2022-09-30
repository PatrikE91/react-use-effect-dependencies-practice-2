import { useState } from "react";

function PlanetsListItem(props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState('')

  console.log("Planet", planet);

  useState(() => {
    const url = planet.films[0]
    fetch(url)
    .then(res => res.json())
    .then(setFirstFilm)
  }, [planet])

  return <li>{planet.name} - First Film {firstFilm.title}</li>;
}

export default PlanetsListItem;
