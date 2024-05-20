import { useEffect, useState } from "react";
import PlanetType from "../models/planetType";
import { useParams } from "react-router-dom";
import PlanetDetails from "../components/PlanetDetails";
import '../styles/pagesStyles/planetPage.css'

type PlanetProps = {
    planets : PlanetType[]
}

function PlanetPage({ planets } : PlanetProps) {
    const [planet, setPlanet] = useState<PlanetType>();
    const {id} = useParams();

    useEffect(()=>{
        if(typeof id !== 'undefined') {
            const chosenPlanet = planets.find(p => p.id === parseInt(id));
            setPlanet(chosenPlanet);
        }
        else {
            console.log("ID är undefined");
        }
    }, [id, planets]);

    return (
        <section className="planetPageWrapper">
        {planet ? <PlanetDetails planet={planet} /> : <div>Loading...</div>}
        </section>
    )
}

export default PlanetPage;