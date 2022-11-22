import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

//redux:
import { useDispatch, useSelector } from "react-redux";
import { setCampaignObj } from "../../features/campaignSlice";
import { setCurrentUser, setRobotSay } from "../../features/portalSlice";

//classes
import { Campaign } from "../../classes/campaign";

//functions
import { capitalStart } from "../../functions/capitalStart";
import { genId } from "../../functions/genId";

//data
import { available_maps } from "./dummy_availableMaps";

//images
import defaultBanner from "../../assets/banners/banner.png";
import water from "../../assets/backgrounds/sea_sprite.jpg";
import MapReader from "../drawMap/MapReader";

const tileSize = 20;
const CreateCampaign = () => {
  const nameRef = useRef(null);
  const armySizeRef = useRef(null);
  const roundsRef = useRef(null);
  const timeLapseRef = useRef(null);
  const mapRef = useRef(null);
  const imgRef = useRef(null);
  const rulesRef = useRef(null);
  const isPublishedRef = useRef(null);
  //const imgRef = useRef(null);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.portal.currentUser);
  const campaignObj = useSelector((state) => state.campaign.campaignObj);
  const mapObj = useSelector((state) => state.campaign.campaignObj.map);
  const choiceMap = useSelector((state) => state.campaign.campaignObj.map);
  const userMaps = useSelector((state) => state.portal.currentUser.createdMaps);

  useEffect(() => {
    localStorage.setItem("portal", JSON.stringify(user));
  }, [user]);

  const changeData = (e) => {
    //console.log(e.target.name, e.target.value)
    let data = e.target.value;
    if (e.target.name === "map") {
      data = JSON.parse(e.target.value);
    } else if (e.target.name === "isPublished") {
      data = e.target.checked;
    }
    console.log({ ...campaignObj, [e.target.name]: data });
    dispatch(setCampaignObj({ ...campaignObj, [e.target.name]: data }));
  };

  const saveCampaignData = (e) => {
    e.preventDefault();

    if (
      campaignObj.name !== "undefined" &&
      campaignObj.armySize > 0 &&
      campaignObj.map.playableTiles >= 35
    ) {
      const campaign = new Campaign(
        genId(),
        campaignObj.name,
        campaignObj.armySize,
        campaignObj.map,
        campaignObj.rounds,
        campaignObj.timeLapse
      );

      dispatch(setCurrentUser({ ...user, createdCampaign: campaign }));
      dispatch(setRobotSay("Campaing created!"));
      //reset fields
      nameRef.current.value = "";
      armySizeRef.current.value = "";
      roundsRef.current.value = "";
      timeLapseRef.current.value = "";
      mapRef.current.value = "";
      rulesRef.current.value = "";

      dispatch(
        setCampaignObj(
          new Campaign(null, "undefined", 0, available_maps[0], 0, "undefined")
        )
      );
    } else {
      if (campaignObj.name === "undefined") {
        dispatch(setRobotSay("We need a name ⛔"));
      } else if (campaignObj.name === "") {
        dispatch(setRobotSay("Name field cant be empty ⛔"));
      } else if (campaignObj.armySize === 0) {
        dispatch(setRobotSay("Define an army size ⛔"));
      } else if (campaignObj.map.playableTiles < 35) {
        dispatch(setRobotSay("Tiles in map are too few ⛔"));
      }
    }
    //write to the data base the new campaign as a new object
  };

  return (
    <div className="createCampaign view">
      <h3>Create Campaign </h3>
      {campaignObj.banner ? (
        <img className="campaignBanner" alt="banner" src={campaignObj.banner} />
      ) : (
        <img className="campaignBanner" alt="banner" src={defaultBanner} />
      )}

      <div className="section">
        <p className="sectionName"> Campaing Name: </p>
        <input
          ref={nameRef}
          type="text"
          name="name"
          className="textImput"
          onChange={changeData}
          placeholder="Write a name..."
        />
      </div>

      <div className="section">
        <p className="sectionName">Army size:</p>
        <select
          ref={armySizeRef}
          name="armySize"
          defaultValue="100"
          onChange={changeData}
        >
          <option value="" hidden>
            Choose
          </option>
          <option value="100">100pts</option>
          <option value="200">200pts</option>
          <option value="300">300pts</option>
          <option value="100">400pts</option>
          <option value="100">500pts</option>
          <option value="100">750pts</option>
          <option value="100">1000pts</option>
          <option value="100">1250pts</option>
          <option value="100">1500pts</option>
          <option value="100">1750pts</option>
          <option value="100">2000pts</option>
        </select>
      </div>

      <div className="flexRow section">
        <p className="sectionName">Rounds:</p>

        <input
          ref={roundsRef}
          type="number"
          name="rounds"
          placeholder="Rounds..."
          onChange={changeData}
          min="4"
          className="numInput"
        />

        <p className="sectionName duration">Duration:</p>
        <select ref={timeLapseRef} name="timeLapse" onChange={changeData}>
          <option value="" hidden>
            Choose
          </option>
          <option value="hours">hour(s)</option>
          <option value="days">day(s)</option>
          <option value="weeks">week(s)</option>
          <option value="month">month(s)</option>
        </select>
      </div>

      <div className="flexColumn subSection banner">
        <p>Banner (Optional):</p>
        <div>
          <input
            ref={imgRef}
            type="text"
            name="banner"
            onChange={changeData}
            placeholder="Image url"
          />
          <button
            onClick={() => {
              imgRef.current.value = "";
            }}
          >
            Erase
          </button>
          <button name="banner" value={undefined} onClick={changeData}>
            reset
          </button>
        </div>
      </div>

      <div className="flexColumn subSection rules">
        <p>Rules (Optional):</p>
        <textarea
          ref={rulesRef}
          type="text"
          name="rules"
          onChange={changeData}
          placeholder="Specify rules for this campaign..."
        />
      </div>

      <div className="flexRow section mapSelect">
        <label className="">Available maps: </label>
        <select ref={mapRef} onChange={changeData} name="map">
          <option value="" hidden>
            Choose
          </option>
          {available_maps.map((map, i) => (
            <option value={JSON.stringify(map)} key={i}>
              {map.name}
            </option>
          ))}

          {userMaps &&
            userMaps.map((map, i) => (
              <option value={JSON.stringify(map)} key={i}>
                {capitalStart(map.name)}
              </option>
            ))}
        </select>
      </div>

      <div className="flexRow subSection">
        <div
          className="displayMap"
          style={{
            backgroundImage: `url(${water})`,
          }}
        >
          {
            <MapReader
              nestedArray={mapObj.map}
              tileSize={tileSize}
              shape={mapObj.shape}
              mapObj={mapObj}
            />
          }
        </div>
      </div>
      <div className="subSection">
        <Link to="/drawmap">🗺️ Draw a map in blank canvas</Link>
      </div>
      <div className="flexColumn subSection ">
        <p>
          Map name:{" "}
          {choiceMap.name ? <>"{capitalStart(choiceMap.name)}"</> : "undefined"}
        </p>
        <p>Shape: {choiceMap ? choiceMap.shape : "undefined"}</p>
        <p>Dimensions: {choiceMap ? choiceMap.dimensions : "undefined"}</p>
        <p>max players: {choiceMap ? choiceMap.maxPlayers : "undefined"}</p>
      </div>

      <div className="section create_buttons">
        {/*
            <p>Publish it:</p>
            <input ref={isPublishedRef} type="checkbox" name="isPublished" onChange={changeData} />
            */}
        <button onClick={saveCampaignData}>create campaign</button>

        <button> cancel </button>
      </div>
    </div>
  );
};

export default CreateCampaign;
