import { useEffect, useState } from 'react'
import './App.scss'
import { getWeather } from './service/service'
import { Weather } from './model/model'
import Day from './components/day/day';
import CurrentDayInfo from './components/currentDayInfo/currentDayInfo';

function App() {

  const [data, setData] = useState<Weather>();
  const [city, setCity] = useState('buenosaires'); 
  const [inputCity, setInputCity] = useState('');


  useEffect( () => {
    const fetchWeather = async () => {
      try{
        const weather = await getWeather(city);
        setData(weather)
      } catch (error) {
        console.error(error)
      }
    };
    fetchWeather();
  }, [city])

  console.log('esta es la data', data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCity(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
    setCity(inputCity);
  };


  return (
    <>
    <div className='widget-container'>
    <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          placeholder="Enter city"
          value={inputCity}
          onChange={handleChange} 
        />
      <button type='submit'>Find</button>
    </form>
      <div className='main-info'>
          <h3>{data?.resolvedAddress}</h3>
          <div className='info'>
            <img
              src={`/icons/${data?.currentConditions.icon}.png`}
              alt={data?.currentConditions.conditions ?? "No Data"}
              style={{ width: "90px", height: "90px"}}
            />
            <div className='temp'>
            <label> {data?.currentConditions.temp} °</label>
            <div className='condition-container'>
              <span>{data?.currentConditions.conditions}</span>
              <span className='min-max'>{data?.days[0].tempmax} ° / {data?.days[0].tempmin} °</span>
            </div>
            </div>
          </div>
      </div>
      {data?.currentConditions && (
          <CurrentDayInfo currentDayInfo={data.currentConditions} />
        )}
      <div className='forecast-container'>
        {data?.days.slice(1, 8).map((day, index) => (
          <Day key={index} days={day} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
