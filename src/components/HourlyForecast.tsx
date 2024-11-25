import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { UnitContext } from './TemperatureSwitch';
import { formatTime, kelvinToCelsius, kelvinToFahrenheit } from '../utils/helpers';
import { WeatherIcon } from './WeatherDisplay';
import { ICON_MAP, WeatherIconCode } from '../constants';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ForecastContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
  width: 300px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${slideIn} 0.5s ease-out;
`;

const ForecastItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Time = styled.div`
  font-size: 0.9rem;
  color: #333;
`;

const Temp = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #007bff;
`;

interface HourlyForecastProps {
  hourly: any[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourly }) => {
  const { unit } = useContext(UnitContext);
  console.log(hourly)

  if (!hourly.length) return null;

  const convertTemp = (temp: number) => {
    return unit === 'C' ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp);
  };




  return (
    <ForecastContainer>
      <h2>Hourly Forecast</h2>
      {hourly.map((hour, index) => {
         const weatherIconCode = hour.weather[0].icon as WeatherIconCode;
         const weatherIconUrl = ICON_MAP[weatherIconCode];
        return (
          <ForecastItem key={index}>
            <Time>{formatTime(hour.dt)}</Time>
            <Temp>{convertTemp(hour.main.temp)}°{unit}</Temp>
            <WeatherIcon width={40} height={40} src={weatherIconUrl}/>
          </ForecastItem>
        )
      })}
    </ForecastContainer>
  );
};

export default HourlyForecast;
