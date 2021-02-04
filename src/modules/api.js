export const HNLAT = 21.027763
export const HNLONG = 105.834160

export const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${HNLAT}&lon=${HNLONG}&units=imperial&exclude={}&appid=${process.env.REACT_APP_WEATHER_KEY}`

export function getPollutionApiUrl(startTime, endTime) {
  return `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${HNLAT}&lon=${HNLONG}&start=${startTime}&end=${endTime}&appid=${process.env.REACT_APP_WEATHER_KEY}`
}
