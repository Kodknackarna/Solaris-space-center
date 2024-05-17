import axios from "axios"
import { useEffect, useState } from "react"
import PlanetType from "./models/planetType";
import PlanetList from "./components/PlanetList";

/*
TODOS:
Implmentera Homepage -> skicka in planetlist dit, rendera ut Homepage i app istället och sylea
*/

function App() {

  const [planets, setPlanets] = useState<PlanetType[]>([]);

  useEffect(()=> {
    axios.get('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
      headers : { 'x-zocom' : 'solaris-7BTxHCyHhzIME5TI' }
  }).then(response => {
    setPlanets(response.data.bodies);
  })
  .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>Solaris Space Center</h1>
      <PlanetList planets={ planets } />
    </>
  )
}

export default App
