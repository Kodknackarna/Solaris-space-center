import { useState } from 'react';
import PlanetType from "../models/planetType";
import "../styles/componentsStyles/planet.css";

type planetProps = {
    planet : PlanetType,
    updateHeaderText: (text: string) => void
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

function Planet ({ planet, updateHeaderText, onMouseEnter, onMouseLeave } : planetProps ) {
    const [headerText, setHeaderText] = useState("Solaris Space Center");

    const handleMouseEnter = () => {
        setHeaderText(`${planet.name}`);
        updateHeaderText(`${planet.name}`);
        onMouseEnter();
    };

    const handleMouseLeave = () => {
        setHeaderText("Solaris Space Center");
        updateHeaderText("Solaris Space Center");
        onMouseLeave();
    };

    return (
        <section > 
            
            <p className="planet" 
                style={{ 
                    backgroundColor: planet.color ?? '#FFFFFF', 
                    width: (planet.size ?? 0) * 10 + 'px', 
                    height: (planet.size ?? 0) * 10 + 'px' 
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
            </p>
        </section>
    )
}

export default Planet;