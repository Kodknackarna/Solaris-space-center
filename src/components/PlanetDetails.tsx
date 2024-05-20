import PlanetType from "../models/planetType"
import '../styles/componentsStyles/planetDetails.css'

type planetProps = {
    planet : PlanetType
}

function PlanetDetails ({ planet } : planetProps) {
    return (
        <section className="planetDetailsWrapper" style={{ backgroundColor: planet.color}}>
            <h1>{planet.name}</h1>
            <div className="planetDetails">
                <p>färg : {planet.color}</p>
                <h2>Detaljer</h2>
                <p><strong>Typ: </strong>{planet.type}</p>
                <p><strong>Omkrets: </strong>{planet.circumference}</p>
                <p><strong>Latinskt namn: </strong>{planet.latinName}</p>
                <p><strong>Distans från solen: </strong>{planet.distance}</p>
                <p><strong>Omloppstid: </strong>{planet.orbitalPeriod}</p>
                <p><strong>Dagstemperatur: </strong>{planet.temp.day}</p>
                <p><strong>Nattemperatur</strong>{planet.temp.night}</p>
            </div>

            <div className="planetMoon">
                <h2>Månar</h2>
                {planet.moons === null || planet.moons.length === 0 && <p>Inga månar</p>}
                {planet.moons !== null && <p>{planet.moons}</p>}
            </div>

            <div className="planetInfo">
                <p>{planet.desc}</p>
            </div>
        </section>
    )
}

export default PlanetDetails;