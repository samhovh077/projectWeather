import React, { useContext } from 'react';
import styled from 'styled-components';
import { UnitContext } from './TemperatureSwitch';
import { kelvinToCelsius, kelvinToFahrenheit } from '../utils/helpers';
import { ICON_MAP, WeatherIconCode } from '../constants'; // Assuming ICON_MAP is exported from a separate file



const Container = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
  max-width: 400px;
  margin: 20px;
  text-align: center;
  max-height: 180px;
`;

const Temperature = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

export const WeatherIcon = styled.img`
  display: inline-block;
  vertical-align: middle;
`;

interface WeatherDisplayProps {
  weather: any;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  const { unit } = useContext(UnitContext);

  if (!weather) return null;

  const convertTemp = (temp: number) => {
    return unit === 'C' ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp);
  };

  const weatherIconCode = weather.weather[0].icon as WeatherIconCode;
  const weatherIconUrl = ICON_MAP[weatherIconCode];

  return (
    <Container>
      <h1>{weather.name}</h1>
      <div>
        <Temperature>{convertTemp(weather.main.temp)}°{unit}</Temperature>
        <WeatherIcon width={100} height={100} src={weatherIconUrl} alt={weather.weather[0].description} />
      </div>
      <Description>{weather.weather[0].main}</Description>
    </Container>
  );
};

export default WeatherDisplay;
