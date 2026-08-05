import React, { useEffect, useState } from 'react';
import { CloudSun, MapPin, RefreshCw } from 'lucide-react';

const DEFAULT_LOCATION = {
  city: 'New York, NY',
  timezone: 'America/New_York'
};

const WEATHER_CODES = {
  0: 'Clear sky',
  1: 'Mostly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Foggy',
  48: 'Rime fog',
  51: 'Light drizzle',
  53: 'Drizzle',
  55: 'Heavy drizzle',
  61: 'Light rain',
  63: 'Rain',
  65: 'Heavy rain',
  71: 'Light snow',
  73: 'Snow',
  75: 'Heavy snow',
  80: 'Rain showers',
  81: 'Showers',
  82: 'Heavy showers',
  95: 'Thunderstorms',
  96: 'Thunderstorms with hail',
  99: 'Severe thunderstorms'
};

const getWeatherLabel = (code) => WEATHER_CODES[code] || 'Clear sky';

const getCurrentTime = (timezone) => {
  if (!timezone) return '';
  return new Intl.DateTimeFormat(undefined, {
    timeZone: timezone,
    hour: 'numeric',
    minute: '2-digit'
  }).format(new Date());
};

export const WeatherWidget = () => {
  const [locationName, setLocationName] = useState(DEFAULT_LOCATION.city);
  const [timezone, setTimezone] = useState(DEFAULT_LOCATION.timezone);
  const [currentTime, setCurrentTime] = useState(getCurrentTime(DEFAULT_LOCATION.timezone));
  const [weather, setWeather] = useState({
    temperature: 72,
    condition: 'Partly Cloudy',
    high: 76,
    low: 62,
    unit: 'F'
  });
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);

  const setFallbackWeather = () => {
    setLocationName(DEFAULT_LOCATION.city);
    setTimezone(DEFAULT_LOCATION.timezone);
    setCurrentTime(getCurrentTime(DEFAULT_LOCATION.timezone));
    setWeather({
      temperature: 72,
      condition: 'Partly Cloudy',
      high: 76,
      low: 62,
      unit: 'F'
    });
    setIsLoadingLocation(false);
  };

  const refreshWeather = () => {
    if (!navigator.geolocation) {
      setFallbackWeather();
      return;
    }

    setIsLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const reverseGeoResponse = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const reverseGeoData = await reverseGeoResponse.json();

          const geoLabel = reverseGeoData?.city || reverseGeoData?.locality || reverseGeoData?.principalSubdivision || `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
          const locationDetail = [reverseGeoData?.city, reverseGeoData?.principalSubdivision, reverseGeoData?.countryName].filter(Boolean).slice(0, 2).join(', ');

          setLocationName(locationDetail || geoLabel);
          setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || DEFAULT_LOCATION.timezone);

          const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
          );
          const weatherData = await weatherResponse.json();

          const current = weatherData?.current;
          const daily = weatherData?.daily;
          const currentTemp = Math.round(current?.temperature_2m ?? 72);
          const high = Math.round(daily?.temperature_2m_max?.[0] ?? 76);
          const low = Math.round(daily?.temperature_2m_min?.[0] ?? 62);
          const unit = weatherData?.current_units?.temperature_2m === '°C' ? 'C' : 'F';

          setWeather({
            temperature: currentTemp,
            condition: getWeatherLabel(current?.weather_code ?? 2),
            high,
            low,
            unit
          });
          setIsLoadingLocation(false);
        } catch (error) {
          setFallbackWeather();
        }
      },
      () => {
        setFallbackWeather();
      },
      {
        enableHighAccuracy: true,
        maximumAge: 60000,
        timeout: 10000
      }
    );
  };

  useEffect(() => {
    refreshWeather();
  }, []);

  useEffect(() => {
    setCurrentTime(getCurrentTime(timezone));
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime(timezone));
    }, 60000);

    return () => clearInterval(timer);
  }, [timezone]);

  return (
    <div className="gn-weather-widget">
      <div className="gn-weather-header">
        <div className="gn-weather-location">
          <MapPin size={15} className="location-icon" />
          <span>{locationName}</span>
        </div>
        <div className="gn-weather-meta-right">
          <span className="gn-weather-type">{currentTime} Local</span>
          <button className="gn-weather-refresh-btn" onClick={refreshWeather} title="Refresh weather from current location">
            <RefreshCw size={13} />
          </button>
        </div>
      </div>

      <div className="gn-weather-main">
        <CloudSun size={38} className="weather-icon" />
        <div className="gn-weather-temp">
          <span className="temp-val">{weather.temperature}°</span>
          <span className="temp-unit">{weather.unit || 'F'}</span>
        </div>
        <div className="gn-weather-details">
          <div className="condition">{isLoadingLocation ? 'Loading your local weather…' : weather.condition}</div>
          <div className="sub-details">H: {weather.high}° • L: {weather.low}°</div>
        </div>
      </div>

      <style>{`
        .gn-weather-widget {
          background: linear-gradient(135deg, #e8f0fe 0%, #ffffff 100%);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 16px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-subtle);
        }

        .dark-theme .gn-weather-widget {
          background: linear-gradient(135deg, #2b384e 0%, #202124 100%);
        }

        .gn-weather-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 12px;
        }

        .gn-weather-meta-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gn-weather-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .location-icon {
          color: var(--accent-color);
        }

        .gn-weather-type {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .gn-weather-refresh-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 999px;
          background-color: var(--bg-hover);
          color: var(--text-secondary);
        }

        .gn-weather-refresh-btn:hover {
          background-color: var(--accent-light);
          color: var(--accent-color);
        }

        .gn-weather-main {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .weather-icon {
          color: #fbbc04;
        }

        .gn-weather-temp {
          display: flex;
          align-items: flex-start;
        }

        .temp-val {
          font-size: 32px;
          font-weight: 800;
          line-height: 1;
          color: var(--text-primary);
        }

        .temp-unit {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .gn-weather-details {
          display: flex;
          flex-direction: column;
        }

        .condition {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .sub-details {
          font-size: 12px;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};
