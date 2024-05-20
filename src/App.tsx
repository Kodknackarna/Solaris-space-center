import axios from "axios"
import { useEffect, useState } from "react"
import PlanetType from "./models/planetType";
import HomePage from "./pages/HomePage";
import PlanetDetails from "./components/PlanetDetails";
import Planet from "./components/Planet";
import PlanetPage from "./pages/PlanetPage";
import { Route, Routes } from "react-router-dom";

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
    <Routes>
      <Route path="/" element={<HomePage planets={ planets } /> } />
      <Route path="/planet/:id" element={<PlanetPage planets = { planets }/>} />
    </Routes>
    </>
  )
}

export default App
