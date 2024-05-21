import axios from "axios"
import { useEffect, useState } from "react"
import PlanetType from "./models/planetType";
import HomePage from "./pages/HomePage";
//import PlanetDetails from "./components/PlanetDetails";
//import Planet from "./components/Planet";
import PlanetPage from "./pages/PlanetPage";
import { Route, Routes } from "react-router-dom";
import Planet from "./components/Planet";
import PlanetList from "./components/PlanetList";
import FavoritePage from "./pages/FavoritePage";

/*
TODOS:
Implmentera Homepage -> skicka in planetlist dit, rendera ut Homepage i app istället och sylea
*/

function App() {

  const [planets, setPlanets] = useState<PlanetType[]>([]);
  const [favoritePlanetList, setFavoritePlanetList] = useState<PlanetType[]>([]);

  useEffect(() => {
    axios
      .get('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
        headers: { 'x-zocom': 'solaris-7BTxHCyHhzIME5TI' }
      })
      .then(response => {
        const fetchedPlanets = response.data.bodies;

        const updatedPlanets = fetchedPlanets.map((planet: PlanetType) => {
          switch (planet.name) {
            case "Solen":
              return { ...planet, color: "#FDCE29", size: 20 };
            case "Merkurius":
              return { ...planet, color: "#8C8B85", size: 1 };
            case "Venus":
              return { ...planet, color: "#E7CCCB", size: 2 };
            case "Jorden":
              return { ...planet, color: "#418ED5", size: 4 };
            case "Mars":
              return { ...planet, color: "#EE5F5F", size: 3 };
            case "Jupiter":
              return { ...planet, color: "#E29468", size: 10 };
            case "Saturnus":
              return { ...planet, color: "#C6A971", size: 8 };
            case "Uranus":
              return { ...planet, color: "#C9D4F1", size: 6 };
            case "Neptunus":
              return { ...planet, color: "#7A91A7", size: 5 };
            default:
              return { ...planet, color: "", size: 0 };
          }
        });

        setPlanets(updatedPlanets);
      })
      .catch(error => console.log(error));
  }, []);

  const togglePlanetInFavoriteList = (id : number) => {
    if(favoritePlanetList.some(planet => planet.id === id)) {
      console.log("Ta bort från planetlist");
    
      const filteredPlanetlist = favoritePlanetList.filter(planet => planet.id !== id);
      setFavoritePlanetList(filteredPlanetlist);
    } else {
      console.log("Lägg till i planetlist");
      setFavoritePlanetList(favoritePlanetList => {
        const foundPlanet = planets.find(planet => planet.id === id);
        return foundPlanet ? [...favoritePlanetList, foundPlanet] : favoritePlanetList;
      });
    }
  };


  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage planets={ planets } /> } />
      <Route path="/planet/:id" element={<PlanetPage planets = { planets }
      togglePlanetInFavoriteList={togglePlanetInFavoriteList}
      favoritePlanetList={favoritePlanetList}/>} />
      <Route path="/favorites" element={<FavoritePage favoritePlanetList={favoritePlanetList}/>} />
    </Routes>
    </>
  )
}

export default App
