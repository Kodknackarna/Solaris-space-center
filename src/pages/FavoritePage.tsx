import Planet from "../components/Planet";
import PlanetNav from "../components/PlanetNav";
import PlanetType from "../models/planetType";
import '../styles/pagesStyles/favoritePage.css'
import BackgroundImage from '../assets/stars-background.jpg';
import FavoritePlanet from "../components/FavoritePlanet";
import { useState } from "react";

type PlanetProps = {
    favoritePlanetList : PlanetType[]
    updateHeaderText: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

function FavoritePage({ favoritePlanetList }: PlanetProps) {
    const sortedFavoritePlanetList = [...favoritePlanetList].sort((a, b) => a.id - b.id);
    const [hoveredPlanet, setHoveredPlanet] = useState<PlanetType | null>(null);

    const handleMouseEnter = (planet: PlanetType) => {
        setHoveredPlanet(planet);
    };

    const handleMouseLeave = () => {
        setHoveredPlanet(null);
    };

    return (
        <section className="favorite-background" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="favoritePlanetList">
            {sortedFavoritePlanetList.length > 0 ? (
                sortedFavoritePlanetList.map(planet => (
                    <div key={planet.id} >
                            <Planet
                            planet={planet}
                            updateHeaderText={() => {}}
                            onMouseEnter={() => handleMouseEnter(planet)}
                            onMouseLeave={handleMouseLeave}
                             />
                              {hoveredPlanet && hoveredPlanet.id === planet.id && ( 
                                    <FavoritePlanet planet={planet} />
                            )}    
                    </div>
                ))
            ) : (
                <p className="nofavo">Inga favoritplaneter</p>
            )}
            
            </div>
                <div className="favorite-navigation">
                    <PlanetNav />
                </div>
         </section>
    )
}

export default FavoritePage;