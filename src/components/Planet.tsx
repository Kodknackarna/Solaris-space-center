import { useState } from 'react';
import PlanetType from "../models/planetType";
import "../styles/componentsStyles/planet.css";

type planetProps = {
    planet : PlanetType,
    updateHeaderText: (text: string) => void
}

function Planet ({ planet, updateHeaderText } : planetProps ) {
    const [headerText, setHeaderText] = useState("Solaris Space Center");

    const handleMouseEnter = () => {
        setHeaderText(`${planet.name}`);
        updateHeaderText(`${planet.name}`);
    };

    const handleMouseLeave = () => {
        setHeaderText("Solaris Space Center");
        updateHeaderText("Solaris Space Center");
    };

    return (
        <section > 
            
            <p className="planet" style={{ backgroundColor: planet.color, width: planet.size * 10 + 'px', height: planet.size * 10 + 'px' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            ></p>
        </section>
    )
}

export default Planet;