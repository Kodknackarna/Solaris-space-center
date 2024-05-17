import axios from "axios"
import { useEffect, useState } from "react"
import PlanetType from "./models/planetType";
import PlanetList from "./components/PlanetList";
import Planet from "./components/Planet";


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
      <PlanetList planets={ planets } />
      <h1>Solaris Space Center</h1>
    </>
  )
}

export default App
