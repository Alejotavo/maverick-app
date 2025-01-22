import { DayType } from "../../model/model";
import './day.scss';

interface DayProps {
    days: DayType;
  }

  function Day({ days }: DayProps) {

    const [year, month, day] = days.datetime.split("-").map(Number);
    const date = new Date(year, month - 1, day); // Crear la fecha con mes base 0
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[date.getDay()];

    return (
      <div className="day-forecast-content">
        <label>{dayOfWeek}</label>
        <div>
            <label>{days.tempmax ?? 'No data available'} °</label>
            <label className="temp-min">{days.tempmin ?? 'No data available'} °</label>
        </div>
        <img src={`/icons/${days.icon}.png`} alt="Weather icon"  />
      </div>
    );
  }
  
  export default Day;