export type WeatherIconCode =
    | "01d" | "02d" | "03d" | "04d" | "09d" | "10d" | "11d" | "13d" | "50d"
    | "01n" | "02n" | "03n" | "04n" | "09n" | "10n" | "11n" | "13n" | "50n";



const WEATHER_ICONS = {
    DAY: {
        CLEAR_SKY: "https://openweathermap.org/img/wn/01d.png",
        FEW_CLOUDS: "https://openweathermap.org/img/wn/02d.png",
        SCATTERED_CLOUDS: "https://openweathermap.org/img/wn/03d.png",
        BROKEN_CLOUDS: "https://openweathermap.org/img/wn/04d.png",
        SHOWER_RAIN: "https://openweathermap.org/img/wn/09d.png",
        RAIN: "https://openweathermap.org/img/wn/10d.png",
        THUNDERSTORM: "https://openweathermap.org/img/wn/11d.png",
        SNOW: "https://openweathermap.org/img/wn/13d.png",
        MIST: "https://openweathermap.org/img/wn/50d.png",
    },
    NIGHT: {
        CLEAR_SKY: "https://openweathermap.org/img/wn/01n.png",
        FEW_CLOUDS: "https://openweathermap.org/img/wn/02n.png",
        SCATTERED_CLOUDS: "https://openweathermap.org/img/wn/03n.png",
        BROKEN_CLOUDS: "https://openweathermap.org/img/wn/04n.png",
        SHOWER_RAIN: "https://openweathermap.org/img/wn/09n.png",
        RAIN: "https://openweathermap.org/img/wn/10n.png",
        THUNDERSTORM: "https://openweathermap.org/img/wn/11n.png",
        SNOW: "https://openweathermap.org/img/wn/13n.png",
        MIST: "https://openweathermap.org/img/wn/50n.png",
    }
}
export const ICON_MAP: Record<WeatherIconCode, string> = {
    "01d": WEATHER_ICONS.DAY.CLEAR_SKY,
    "02d": WEATHER_ICONS.DAY.FEW_CLOUDS,
    "03d": WEATHER_ICONS.DAY.SCATTERED_CLOUDS,
    "04d": WEATHER_ICONS.DAY.BROKEN_CLOUDS,
    "09d": WEATHER_ICONS.DAY.SHOWER_RAIN,
    "10d": WEATHER_ICONS.DAY.RAIN,
    "11d": WEATHER_ICONS.DAY.THUNDERSTORM,
    "13d": WEATHER_ICONS.DAY.SNOW,
    "50d": WEATHER_ICONS.DAY.MIST,
    "01n": WEATHER_ICONS.NIGHT.CLEAR_SKY,
    "02n": WEATHER_ICONS.NIGHT.FEW_CLOUDS,
    "03n": WEATHER_ICONS.NIGHT.SCATTERED_CLOUDS,
    "04n": WEATHER_ICONS.NIGHT.BROKEN_CLOUDS,
    "09n": WEATHER_ICONS.NIGHT.SHOWER_RAIN,
    "10n": WEATHER_ICONS.NIGHT.RAIN,
    "11n": WEATHER_ICONS.NIGHT.THUNDERSTORM,
    "13n": WEATHER_ICONS.NIGHT.SNOW,
    "50n": WEATHER_ICONS.NIGHT.MIST,
};
