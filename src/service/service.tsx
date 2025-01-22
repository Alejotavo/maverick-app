import axios from 'axios';
export const API_URL = (city: string) => 
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${import.meta.env.VITE_WEATHER_API_KEY}&contentType=json&iconSet=icons1`;
  
export const getWeather = async (city: string) => {
    try{
        const response = await axios.get(API_URL(city));
        return response.data
    } catch (error){
        if (axios.isAxiosError(error)) {
            throw new Error(`Error carga datos ${error.message}`);
        }
        throw new Error('Error desconocido')
    }
}
