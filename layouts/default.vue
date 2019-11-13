<template>
  <v-app>
    <v-content id="content">
      <transition>
        <nuxt />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
a {
  text-decoration: none;
  color: white;
}

#content {
  background: #498cec;
}

#toolbar {
  background: #498cec;
}
</style>
