import React from 'react';

const SectionArmySize = () => {
  return (
    <div className={css.section}>
            <p className={css.sectionName}>Army size:</p>
                
            <div className={css.subSectionArea}>
                <p className={css.subSectionName}>Tactic commando size:</p>
                <div className={css.subSection}>
                        
                    <div> 
                        <input  type="radio" name="armySize" defaultValue="100" onClick={changeData} />
                        100pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="200" onClick={changeData} />
                        200pts
                    </div>
                            
                    <div>
                        <input type="radio" name="armySize" defaultValue="300" onClick={changeData} />300pts
                    </div>


                    <div>
                        <input type="radio" name="armySize" defaultValue="400" onClick={changeData} />400pts
                    </div>


                    <div>
                        <input type="radio" name="armySize" defaultValue="500" onClick={changeData} />500pts
                    </div>

                </div>

            </div>

            <div className={css.subSectionArea}>
                <p className={css.subSectionName}>Combat Groups size: </p>
                <div className={css.subSection}>
                    <div>
                        <input type="radio" name="armySize" defaultValue="500" onClick={changeData} />500pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="750" onClick={changeData} />750pts
                    </div>
                            
                    <div>
                        <input type="radio" name="armySize" defaultValue="1000" onClick={changeData} />1000pts
                    </div>
                            
                    <div>
                        <input type="radio" name="armySize" defaultValue="1500" onClick={changeData} />1500pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="1750" onClick={changeData} />1750pts
                    </div>

                </div>

            </div>

            <div className={css.subSectionArea}>
                <p className={css.subSectionName}>Crusade War size: </p>
                <div className={css.subSection}>
                    <div>
                        <input type="radio" name="armySize" defaultValue="2000" onClick={changeData} />2000pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="2500" onClick={changeData} />2500pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="3000" onClick={changeData} />3000pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="3500" onClick={changeData} />3500pts
                    </div>

                    <div>
                        <input type="radio" name="armySize" defaultValue="4000" onClick={changeData} />4000pts
                    </div>
                            
                </div>
            </div>

        </div>
  )
}

export default SectionArmySize;