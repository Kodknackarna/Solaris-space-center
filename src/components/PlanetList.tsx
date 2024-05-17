import PlanetType from "../models/planetType";
import Planet from "../components/Planet";

type planetProps = {
    planets : PlanetType []
}

function PlanetList ({ planets } : planetProps) {
    return (
        <>
        {
            planets.map(planet => {
                switch(planet.name){
                    case "Solen":
                        planet.color = "#FDCE29";
                        planet.size = 20;
                        break;
                    case "Merkurius":
                        planet.color = "#8C8B85";
                        planet.size = 1;
                        break;
                    case "Venus":
                        planet.color = "#E7CCCB";
                        planet.size = 2;
                        break;
                    case "Jorden":
                        planet.color = "#418ED5";
                        planet.size = 4;
                        break;
                    case "Mars":
                        planet.color = "#EE5F5F";
                        planet.size = 3;
                        break;        
                    case "Jupiter":
                        planet.color = "#E29468";
                        planet.size = 10;
                        break;
                    case "Saturnus":
                        planet.color = "#C6A971";
                        planet.size = 8;
                        break;
                    case "Uranus":
                        planet.color = "#C9D4F1";
                        planet.size = 6;
                        break;
                    case "Neptunus":
                        planet.color = "#7A91A7";
                        planet.size = 5;
                        break;
                    default: 
                        planet.color = "";
                        planet.size = 0;
                        break;
                }
                return <Planet planet={ planet } key={ planet.id } />
            })
        }
        </>
    )
}

export default PlanetList;