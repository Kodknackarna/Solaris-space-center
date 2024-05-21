import PlanetType from "../models/planetType";
import '../styles/componentsStyles/planetDetails.css';
import PlanetNav from "./PlanetNav";


type planetProps = {
    planet: PlanetType
    togglePlanetInFavoriteList : (id : number ) => void 
    favoritePlanetList : PlanetType[]
}

function PlanetDetails({ planet, togglePlanetInFavoriteList, favoritePlanetList }: planetProps) {

    const isInFavoriteList = (id : number) => {
        return favoritePlanetList.some(planet => planet.id === id)
    }

    return (
        <section className="planetDetailsBackround">
            <fieldset className="planetDetailsWrapper">
                <legend>{planet.name}</legend>
                <div className="upperWrapper">
                    <div className="planetDetails">
                        <h2>Detaljer</h2>
                        <p><strong>Typ: </strong>{planet.type}</p>
                        <p><strong>Omkrets: </strong>{planet.circumference}</p>
                        <p><strong>Latinskt namn: </strong>{planet.latinName}</p>
                        <p><strong>Distans från solen: </strong>{planet.distance}</p>
                        <p><strong>Omloppstid: </strong>{planet.orbitalPeriod}</p>
                        <p><strong>Dagstemperatur: </strong>{planet.temp.day}</p>
                        <p><strong>Nattemperatur: </strong>{planet.temp.night}</p>
                    </div>
                    
                    <div className="planetMoon">
                        <h2>Månar</h2>
                        <p>{planet.moons && planet.moons.length > 0 ? planet.moons.join(', ') : 'Inga månar'}</p>
                    </div>
                </div>

                <div className="planetInfo">
                    <p>{planet.desc}</p>
                </div>
                <button onClick={() => togglePlanetInFavoriteList(planet.id)} className="planet-details-btn">
                {isInFavoriteList (planet.id) ? "Ta bort favorit" : "Lägg till favorit"}
             </button>
            </fieldset>
            <div className="navigation">
            <PlanetNav />
            </div>
        </section>
    );
}

export default PlanetDetails;
