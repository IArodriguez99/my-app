const PlanetList = ( planets ) => {
    
    return ( 
        <div className="planet_list">
            {planets.map((planet) => (
                <div className="planet-preview" key={planet.id}>
                    <h1>{ planet.name }</h1>
                    <p>{ planet.overview.content }</p>    
                </div>
            ))}
        </div>
     );
}
 
export default PlanetList;