import { useEffect, useState } from "react";
import PlanetType from "../models/planetType";
import { useParams } from "react-router-dom";
import PlanetDetails from "../components/PlanetDetails";
import '../styles/pagesStyles/planetPage.css'

type PlanetProps = {
    planets: PlanetType[]
    togglePlanetInFavoriteList : (id : number) => void
    favoritePlanetList : PlanetType[]
}



function PlanetPage({ planets, togglePlanetInFavoriteList, favoritePlanetList }: PlanetProps) {
    const [planet, setPlanet] = useState<PlanetType | undefined>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            const chosenPlanet = planets.find(p => p.id === parseInt(id));
            setPlanet(chosenPlanet);
        } else {
            console.log("ID är undefined");
        }
    }, [id, planets]);



    const generateGradient = (planetName: string, color: string): string => {
        switch (planetName) {
            case "Solen":
                return "linear-gradient(to right, #FFA803, #FFCF28)";
            case "Merkurius":
                return "linear-gradient(to right, #8C8B85, #B0B0B0)";
            case "Venus":
                return "linear-gradient(to right, #FFD1DC, #E7CCCB)";
            case "Jorden":
                return "linear-gradient(to right, #3B5998, #418ED5)";
            case "Mars":
                return "linear-gradient(to right, #EE5F5F, #FF6347)";
            case "Jupiter":
                return "linear-gradient(to right, #E29468, #F4A460)";
            case "Saturnus":
                return "linear-gradient(to right, #C6A971, #D2B48C)";
            case "Uranus":
                return "linear-gradient(to right, #C9D4F1, #AFEEEE)";
            case "Neptunus":
                return "linear-gradient(to right, #7A91A7, #4682B4)";
            default:
                return `linear-gradient(45deg, ${color}, #000)`;
        }
    }

    const gradientBackground = planet ? generateGradient(planet.name, planet.color ?? '#FFFFFF') : 'none';


    return (
        <section className="planetPageWrapper" style={{ background: gradientBackground }}>
            {planet ? <PlanetDetails planet={planet} 
            togglePlanetInFavoriteList={togglePlanetInFavoriteList} 
            favoritePlanetList={favoritePlanetList}/> 
            : <div>Loading...</div>}
            
        </section>
    )
}

export default PlanetPage;
