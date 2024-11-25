import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchWeather } from '../features/weather/weatherSlice';
import WeatherDisplay from '../components/WeatherDisplay';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';
import { MiddleContent } from '../components/MiddleContent';
import SearchBarAndChangeTemp from '../components/SearchBar';

const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather('Yerevan'));
  }, [dispatch]);


  return (
    <div>
      <SearchBarAndChangeTemp/>
      <MiddleContent>
        <WeatherDisplay weather={weather.currentWeather} />
        <HourlyForecast hourly={weather.hourlyForecast} />
      </MiddleContent>
      <DailyForecast daily={weather.dailyForecast} />
    </div>
  );
};

export default HomePage;
