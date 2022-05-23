const defaultPathForWeatherImages = "../../assets/images/"

const thunderstormRainDayImage = `${defaultPathForWeatherImages}thunderstorm-rain-day.svg`
const thunderstormRainNightImage = `${defaultPathForWeatherImages}thunderstorm-rain-night.svg`

const thunderstormDrizzleImage = `${defaultPathForWeatherImages}thunderstorm-drizzle.svg`

const drizzleImage = `${defaultPathForWeatherImages}drizzle.svg`

const rainImage = `${defaultPathForWeatherImages}rain.svg`

const heavyRainImage = `${defaultPathForWeatherImages}heavy-rain.svg`

const showerRainDayImage = `${defaultPathForWeatherImages}shower-rain-day.svg`
const showerRainNightImage = `${defaultPathForWeatherImages}shower-rain-night.svg`

const snowWithSunImage = `${defaultPathForWeatherImages}snow-with-sun.svg`
const snowWithMoonImage = `${defaultPathForWeatherImages}snow-with-moon.svg`

const snowImage = `${defaultPathForWeatherImages}snow.svg`

const sleetImage = `${defaultPathForWeatherImages}sleet.svg`

const hazeDayImage = `${defaultPathForWeatherImages}haze-day.svg`
const hazeNightImage = `${defaultPathForWeatherImages}haze-night.svg`

const clearSkyDayImage = `${defaultPathForWeatherImages}clear-sky-day.svg`
const clearSkyNightImage = `${defaultPathForWeatherImages}clear-sky-night.svg`

const cloudsDayImage = `${defaultPathForWeatherImages}clouds-day-svg`
const cloudsNightImage = `${defaultPathForWeatherImages}clouds-night-svg`

const brokenCloudsDayImage = `${defaultPathForWeatherImages}broken-clouds-day.svg`
const brokenCloudsNightImage = `${defaultPathForWeatherImages}broken-clouds-night.svg`

const overcastCloudsImage = `${defaultPathForWeatherImages}overcast-clouds.svg`

export const weatherImagesMapped = {
  200:{
    t01d: thunderstormRainDayImage,
    t01n: thunderstormRainNightImage
  },
  201:{
    t02d: thunderstormRainDayImage,
    t02n: thunderstormRainNightImage
  },
  202: {
    t03d: thunderstormRainDayImage,
    t03n: thunderstormRainNightImage,
  },
  230: {
    t04d: thunderstormDrizzleImage,
    t04n: thunderstormDrizzleImage
  },
  231: {
    t04d: thunderstormDrizzleImage,
    t04n: thunderstormDrizzleImage
  },
  232: {
    t04d: thunderstormDrizzleImage,
    t04n: thunderstormDrizzleImage
  },
  233: {
    t05d: thunderstormDrizzleImage,
    t05n: thunderstormDrizzleImage
  },
  300: {
    d01d: drizzleImage,
    d01n: drizzleImage
  },
  301: {
    d02d: drizzleImage,
    d02n: drizzleImage
  },
  302: {
    d03d: drizzleImage,
    d03n: drizzleImage
  },
  500: {
    r01d: rainImage,
    r01n: rainImage
  },
  501: {
    r02d: rainImage,
    r02n: rainImage
  },
  502: {
    r03d: heavyRainImage,
    r03n: heavyRainImage
  },
  511: {
    f01d: rainImage,
    f01n: rainImage
  },
  520: {
    r04d: rainImage,
    r04n: rainImage
  },
  521: {
    r05d: showerRainDayImage,
    r05n: showerRainNightImage
  },
  522: {
    r06d: rainImage,
    r06n: rainImage
  },
  600: {
    s01d: snowWithSunImage,
    s01n: snowWithMoonImage
  },
  601: {
    s02d: snowImage,
    s02n: snowImage
  },
  602: {
    s03d: snowImage,
    s03n: snowImage
  },
  610: {
    s04d: snowWithSunImage,
    s04n: snowWithMoonImage
  },
  611: {
    s05d: sleetImage,
    s05n: sleetImage
  },
  612: {
    s05d: sleetImage,
    s05n: sleetImage
  },
  621: {
    s01d: snowWithSunImage,
    s01n: snowWithMoonImage
  },
  622: {
    s02d: snowImage,
    s02n: snowImage
  },
  623: {
    s06d: snowImage,
    s06n: snowImage
  },
  700: {
    a01d: hazeDayImage,
    a01n: hazeNightImage
  },
  711: {
    a02d: hazeDayImage,
    a02n: hazeNightImage
  },
  721: {
    a03d: hazeDayImage,
    a03n: hazeNightImage
  },
  731: {
    a04d: hazeDayImage,
    a04n: hazeNightImage
  },
  741: {
    a05d: hazeDayImage,
    a05n: hazeNightImage
  },
  751: {
    a06d: hazeDayImage,
    a06n: hazeNightImage
  },
  800: {
    c01d: clearSkyDayImage,
    c01n: clearSkyNightImage
  },
  801: {
    c02d: cloudsDayImage,
    c02n: cloudsNightImage
  },
  802: {
    c02d: cloudsDayImage,
    c02n: cloudsNightImage
  },
  803: {
    c03d: brokenCloudsDayImage,
    c03n: brokenCloudsNightImage
  },
  804: {
    c04d: overcastCloudsImage,
    c04n: overcastCloudsImage
  },
  900: {
    u00d: rainImage,
    u00n: rainImage
  },
}