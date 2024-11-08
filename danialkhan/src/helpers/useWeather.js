import { useState, useEffect } from 'react';

export function useWeather() {
  const [weather, setWeather] = useState({ temp: null, city: 'Toronto' });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=-79.38&current_weather=true'
        );
        const data = await response.json();
        setWeather(prev => ({
          ...prev,
          temp: Math.round(data.current_weather.temperature)
        }));
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 300000); // Update every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return weather;
}