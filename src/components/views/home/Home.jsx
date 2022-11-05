import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//components:
import Gates from '../../ui_components/Gates';

//functions
import { capitalStart } from '../../../functions/capitalStart';


const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => {
        return state.portal.currentUser});

  return (
    
    <div>
      <div className="userWelcome view">
        <Gates />
        <p>Welcome Home {capitalStart(user.username)}</p>

        <div className="newsletteer">
          
          <div className="article">
            <img className="articleImg" src="https://cdn.pixabay.com/photo/2017/09/08/20/29/chess-2730034_960_720.jpg" alt="image"/>
            <h3>Article 1:</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ex itaque repellat velit, cum similique. Possimus nobis laudantium esse veniam suscipit rerum assumenda delectus, aspernatur, asperiores nihil et nostrum, repellat sequi labore! Non quisquam ducimus provident dolor voluptatibus atque similique odit dignissimos soluta! Exercitationem aperiam modi natus deserunt similique fugiat?</p>
          </div>
          <div className="article">
            <img className="articleImg" src="https://www.avenuecalgary.com/wp-content/uploads/2016/02/Boardgame.jpeg" alt="image"/>
            <h3>Article 2:</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ex itaque repellat velit, cum similique. Possimus nobis laudantium esse veniam suscipit rerum assumenda delectus, aspernatur, asperiores nihil et nostrum, repellat sequi labore! Non quisquam ducimus provident dolor voluptatibus atque similique odit dignissimos soluta! Exercitationem aperiam modi natus deserunt similique fugiat?</p>
            <div className="article">
            <img className="articleImg" src="https://cdn.vox-cdn.com/thumbor/2CYEeEgAqffWbKYa7Jm11GnjTgw=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13432583/GettyImages_544975771.jpg" alt="image"/>
            <h3>Article 2:</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt ex itaque repellat velit, cum similique. Possimus nobis laudantium esse veniam suscipit rerum assumenda delectus, aspernatur, asperiores nihil et nostrum, repellat sequi labore! Non quisquam ducimus provident dolor voluptatibus atque similique odit dignissimos soluta! Exercitationem aperiam modi natus deserunt similique fugiat?</p>
          </div>
          </div>

        </div>
      </div>
      

    </div>
  )
}

export default Home;