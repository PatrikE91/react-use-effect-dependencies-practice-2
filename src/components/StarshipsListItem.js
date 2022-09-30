import { useEffect ,useState } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState('')

  console.log(starship);

  useEffect(() => {
    if (starship.pilots?.length) { 
      fetch(starship.pilots[0])
      .then((res) => res.json())
      .then(setFirstPilot)
    } else {
      setFirstPilot('none');
    }
  }, [starship]);

  return <li>{starship.name} - First Pilot {firstPilot === 'none' ? 'none' : firstPilot.name}</li>;
}

export default StarshipsListItem;

