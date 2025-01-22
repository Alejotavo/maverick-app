import './currentDayInfo.scss';
import { CurrentConditions } from "../../model/model";
import eyeIcon from '/icons/eye.svg';
import windIcon from '/icons/wind.svg';
import dropletIcon from '/icons/droplet.svg';


interface CurrentDayinfoProps {
    currentDayInfo: CurrentConditions;
  }

  function CurrentDayInfo( { currentDayInfo }: CurrentDayinfoProps ) {

    return (
      <div className="current-day-container">
        <label>
            <img src={windIcon} alt="Wind Speed" />
            {currentDayInfo.windspeed }Km/h
        </label>
        <label>
        <img src={dropletIcon} alt="Wind Speed" />
            {currentDayInfo.humidity}
        </label>
        <label>
        <img src={eyeIcon} alt="Wind Speed" />
            {currentDayInfo.visibility}Km
        </label>
      </div>
    );
  }
  
  export default CurrentDayInfo;