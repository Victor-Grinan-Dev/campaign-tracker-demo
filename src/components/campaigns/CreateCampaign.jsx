import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Campaign } from '../../classes/campaign';
import { setChoiceMap, setCreatingCampaign } from '../../features/portalSlice';
import { capitalStart } from '../../functions/capitalStart';
import { genId } from '../../functions/genId';
import { available_maps } from './dummy_availableMaps';

const CreateCampaign = () => {
    const dispatch = useDispatch();
    const creatingCampaign = useSelector(state => state.portal.creatingCampaign)
    const choiceMap = useSelector(state => state.portal.choiceMap)

    const handleMap = (e) => {
        dispatch(setChoiceMap(JSON.parse(e.target.value)));
    }

    const changeData = (e) => {
        if(e.target.name === "map"){
            
            console.log( available_maps.filter(item => {
                return item.name === JSON.parse(e.target.name)
            }))
 /*
            const item = available_maps.filter(map => {
                return map.name === e.target.name;
            })
 */
            //console.log(item)
           //dispatch(setChoiceMap(item[0]))
        }
        dispatch(setCreatingCampaign({ ...creatingCampaign, [e.target.name]: e.target.value }));
    };

    const saveCampaignData = (e) => {
        e.preventDefault()
        
        if(creatingCampaign.name && creatingCampaign.armySize && creatingCampaign.map){
            const toSaveCampaign = new Campaign(genId(), creatingCampaign.name, creatingCampaign.armySize, JSON.parse(creatingCampaign.map), creatingCampaign.rounds, creatingCampaign.timeLapse);

            console.log(toSaveCampaign)
        }
        //write to the data base the new campaign as a new object
    };

  return (
    <div className='createCampaign view'>
        <h3>Create Campaign</h3>

        <div className="section">
            <p className="sectionName"> Campaing Name: </p>
            <input type="text" name="name" className='textImput' onChange={changeData} placeholder="Write a name..." />
        </div>

        <div className="section">
            
            <p className="sectionName">Army size:</p>      
            <select name="armySize" defaultValue="100" onChange={changeData}>

                <option value="" hidden>Choose</option>
                <option value="100" >100pts</option>
                <option value="200" >200pts</option>
                <option value="300" >300pts</option>
                <option value="100" >400pts</option>
                <option value="100" >500pts</option>
                <option value="100" >750pts</option>
                <option value="100" >1000pts</option>
                <option value="100" >1250pts</option>
                <option value="100" >1500pts</option>
                <option value="100" >1750pts</option>
                <option value="100" >2000pts</option>

            </select>

            <input type="number" name="armySize" className='numInput' placeholder='Write a num'/>
        
        </div>
        
        <div className="section" >
            <p className="sectionName" >Rounds:</p> 
                
            <input type="number" name="rounds" placeholder="Rounds..." onChange={changeData} min="4" className="numInput"/>
                        
            <p className="sectionName" >Duration:</p>
            <select name="timeLapse" id="">

                <option value="null">Choose</option>
                <option value="hours">hour(s)</option>
                <option value="days">day(s)</option>
                <option value="weeks">week(s)</option>
                <option value="month">month(s)</option>

            </select>
        </div>

        <div className="mapSection section">
        
            <div className="flexRow subSection mapSelect">

                <label className="sectionName">Available maps: </label>
                <select onChange={handleMap} name="map">  
                    <option value="" hidden>Choose</option>    
                        {
                            available_maps.map((map, i) => (
                                <option value={JSON.stringify(map)} key={i} >{map.name}</option>
                            ))
                        }                        
                </select > 
            </div>

            <div className="flexColumn subSection ">
                
                <p>Map name: {choiceMap.name ? <>"{capitalStart(choiceMap.name)}"</> : "undefined" }</p>
                <p>Shape: {choiceMap ? choiceMap.shape : "undefined" }</p>
                <p>Dimensions: {choiceMap ? choiceMap.dimensions : "undefined" }</p>
                <p>max players: {choiceMap ? choiceMap.maxPlayers : "undefined" }</p>
                
            </div>

            <div className="flexColumn subSection">
                
                    <p className="sectionName">Display Map:</p> 
                    ⚠️ Upcoming feature   
                
            </div>
    
            <div className="subSection">
                link to Draw a map in blank canvas
                {/* <Link to="/drawmap"> Draw a map in blank canvas </Link> */}
            </div>

    </div>
    
                    
       

        <div className="section">
            <button onClick={saveCampaignData}>create campaign</button> 
            <button> cancel </button>
        </div>
    </div>
  )
};

export default CreateCampaign


