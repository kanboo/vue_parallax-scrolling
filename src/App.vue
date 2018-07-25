<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name="fade" mode="out-in" appear>
      <router-view/>
    </transition>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',
  components: {
    TheFooter
  }
}
</script>

<style lang="scss" src="./sass/all.scss"></style>
