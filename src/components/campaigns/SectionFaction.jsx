import React from 'react';

const SectionFaction = () => {
  return (
    <div className={css.section} >
                    <p className={css.sectionName}>Available Factions:</p> 
                    ⚠️ Upcoming feature
                    <div>
                    {factions.map(faction => (
                            <div key={faction.id}>
                                <input type="checkbox" name="factions"  /><label htmlFor="factions">{faction.name}</label><span style={{backgroundColor:faction.color, marginLeft:"20px", borderRadius:"20px", 
                            padding:"0 5px 0 5px"}} >_ </span>
                            </div>

                        ))}
                                    {/* <div>            
                                <div >
                                    <div className="selectFaction">
                                        <input type="checkbox" name="factions" defaultValue="The Justice Aliance" /> 
                                        <p>"The Justice Aliance" </p>
                                        <input type="color" defaultValue="#309abb"/>
                                    </div>

                                    <div className="selectFaction">
                                        <input type="checkbox" name="factions" defaultValue="The Dark Forces" /> 
                                        <p>"The Dark Forces"</p> 
                                        <input type="color" defaultValue="#830202"/>
                                    </div>


                                    <div className="selectFaction">
                                        <input type="checkbox" name="factions" defaultValue="The Aliens and ET's" /> 
                                        <p>"The Aliens and ET's" </p>
                                        <input type="color" defaultValue="#1fc778"/>
                                    </div>
                                    

                                    <div className="selectFaction"> 
                                        <input type="checkbox" name="factions" defaultValue="The Death Machines" /> 
                                        <p> "The Death Machines" </p>
                                    
                                        <input type="color" defaultValue={deathMachinesColor} />
                                    </div>
                                    
                                    <div className="selectFaction">
                                        <input type="checkbox" name="factions" defaultValue="The Beast Hordes" /> 
                                        <p>"The Beast Hordes" </p>
                                        <input type="color" defaultValue={beastHordesColor} />
                                    </div>
                                    
                                    <div className="selectFaction">
                                        <input type="checkbox" name="factions" defaultValue="The Infestation Bugs"  /> 
                                    <p> "The Infestation Bugs" </p>
                                        <input type="color" defaultValue={infestationColor} />
                                    </div>
                                    
                                </div> 
                        </div> */}
                        </div>
                        </div>
  )
}

export default SectionFaction;