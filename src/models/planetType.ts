type PlanetType =
{
id: number,
type: string,
name: string,
latinName: string,
rotation: number,
circumference: number,
temp: {
    day: number,
    night: number
},
distance: number,
orbitalPeriod: number,
desc: string,
moons: [],
size?: number,
color?: number
}

export default PlanetType;
