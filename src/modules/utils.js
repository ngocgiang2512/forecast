export function fahToCel(fah) {
  return Math.round(fah * 9 / 5 + 32)
}

export function celToFah(cel) {
  return Math.round((cel - 32) * 5 / 9)
}

export function mphToKph(mph) {
  return Math.round(mph * 1.60934).toFixed(0)
}

export function getWindDirection(windDeg) {
  let directions = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"]
  let direction =  directions[Math.round((windDeg % 360)/ 22.5,0)]
  return direction
}

export function getAirPollutionInfo(aqi) {
  let airQualities = ["Good","Fair","Moderate","Poor","Very Poor",]
  return airQualities[aqi - 1]
}
