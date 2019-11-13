<template>
  <v-container>
    <v-flex xs12>
      <v-flex xs6 justify-start>
        <v-form @submit.prevent="getWeatherInfo">
          <v-flex d-flex justify-start>
            <v-text-field
              v-model="city"
              label=""
              placeholder="Поиск"
              outlined
            ></v-text-field>
            <v-btn @click="getWeatherInfo" text class="primary--text">OK</v-btn>
          </v-flex>
        </v-form>
      </v-flex>
      <v-flex xs6 d-flex justify-end>
        <span>&deg;</span>
        <v-btn light-blue darken-2 outlined>C</v-btn>
        <v-btn light-blue darken-2 outlined>F</v-btn>
      </v-flex>
    </v-flex>

    <v-flex xs12>
      <v-card color="transparent">
        <v-card-text>
          <v-layout justify-center>
            <v-flex xs4 class="text-xs-center">
              <img :src="icon" alt="weather icon" />
              <p>
                <span class="display-1">{{ temp() }} &deg;C</span>
                <span class="caption ml-4">{{
                  weather.weather[0].description
                }}</span>
              </p>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12>
      <v-card color="transparent">
        <v-card-text>
          <v-layout justify-center>
            <v-flex xs4 class="text-xs-center">
              <h4>Ветер</h4>
              <h3 class="headline">
                {{ weather.wind.speed }} m/s ({{ weather.wind.deg }}
                &deg;)
              </h3>
            </v-flex>
            <v-flex xs4 class="text-xs-center">
              <h4>Давление</h4>
              <h3 class="headline">{{ weather.main.pressure }} hPa</h3>
            </v-flex>
            <v-flex xs4 class="text-xs-center">
              <h4>Влажность</h4>
              <h3 class="headline">{{ weather.main.humidity }} %</h3>
            </v-flex>
            <v-flex xs4 class="text-xs-center">
              <h4>Вероятность дож.</h4>
              <h3 class="headline">{{ weather.main.humidity }} %</h3>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('weather', ['weather']),
    city: {
      get() {
        return this.$store.state.weather.city
      },
      set(value) {
        this.$store.commit('weather/setCity', value)
      }
    },
    icon() {
      return this.weather.weather
        ? `https://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`
        : ''
    }
  },
  fetch({ store, $axios }) {
    return store.dispatch('weather/getWeatherInfo')
  },
  methods: {
    getWeatherInfo() {
      this.$store.dispatch('weather/getWeatherInfo')
    },
    temp() {
      return Math.round(this.weather.main.temp - 273)
    }
  }
}
</script>

<style>
.h4 {
  opacity: 0.6;
}
</style>
