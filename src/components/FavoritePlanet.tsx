import PlanetType from "../models/planetType";
import '../styles/componentsStyles/favoritePlanet.css'

type PlanetProps = {
    planet : PlanetType
}

function FavoritePlanet ({ planet } : PlanetProps) {
    return (
        <section className="favoriteplanet-wrapper" style={{ marginTop: "1rem" }}>
            <h1>{planet.name}</h1>
            <p><strong>Typ: </strong>{planet.type}</p>
            <p><strong>Omkrets: </strong>{planet.circumference}</p>
            <p><strong>Distans från solen: </strong>{planet.distance}</p>
            <p><strong>Omloppstid: </strong>{planet.orbitalPeriod}</p>
            <p><strong>Temperatur dag/natt: </strong>{planet.temp.day} / {planet.temp.night}</p>
        </section>
    )
}

export default FavoritePlanet;