<script>
export default {
  name: 'index',
  components: {},
  data() {
    return {
      title: 'Vue - Porject',
      animationClass: {
        step1: false,
        step2: false,
        step3: false,
        step4: false
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.$set(this.animationClass, 'step1', true)
    }, 2000)

    setTimeout(() => {
      this.$set(this.animationClass, 'step2', true)
    }, 6000)

    setTimeout(() => {
      this.$set(this.animationClass, 'step3', true)
    }, 6200)

    setTimeout(() => {
      this.$set(this.animationClass, 'step4', true)
    }, 6400)

    setTimeout(() => {
      this.$router.push({ path: 'Question' })
    }, 8000)
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
