import React from 'react';

const SectionMap = () => {

    const displayMap = () => {
        return (
            <div className={css.section} >
                            <p className={css.sectionName}>Map:</p> ⚠️ Upcoming feature
                            {isMap ? <Link to={map.name} state={{map:map}} >
                                    <button>Show</button>
                                </Link> : <button disabled>Show</button> }
                            <div style={{
                                backgroundColor:"black",
                                width:300,
                                height:200
                            }}>
                                {/* {isMap && console.log(data.map)} */}
                                {isMap &&  mapDataDisplay(data.map) }
                                
                            </div>
                            <div className={css.mapTile}>
                            </div>
                        </div>
        )
    }

    const mapDataDisplay = (data) => {
        return <div>
            <p>Map name: {data.name}</p>
            <p>Shape: {data.shape}</p>
            <p>Dimensions: {data.dimensions}</p>
            <p>max players: {data.maxPlayers}</p>
        </div>
    }

  return (
    <div className={css.section}>
                        <p className={css.sectionName}>Available maps: </p>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"space-between"
                        }}>
                            <div>      
                                {available_maps.map(option => (
                                    <div key={option.name}>
                                        <input type="radio" name="map" defaultValue={option.name} onClick={changeData} /> 
                                        <label htmlFor={option.name}>{option.name}</label>
                                    </div>       
                                ))}                        
                            </div> 
                            <div>
                                <Link to={"/drawmap"}> <button>Draw a map in blank canvas</button> </Link>
                            </div>
                        </div>
                    </div>

    
  )
}

export default SectionMap;