export const state = () => ({
  city: 'Omsk',
  weather: {}
})

export const mutations = {
  setCity(state, payload) {
    state.city = payload
  },
  setWeather(state, payload) {
    state.weather = payload
  }
}

export const actions = {
  getWeatherInfo(context) {
    return this.$axios
      .$get(
        `https://api.openweathermap.org/data/2.5/weather?q=${context.state.city}&appid=0d1d400703032bed866be7eacd60dd15`
      )
      .then((res) => context.commit('setWeather', res))
  }
}
// ${process.env.weatherAppId}
