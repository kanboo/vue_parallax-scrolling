<script>
export default {
  name: 'question',
  components: {},
  data() {
    return {
      title: 'Vue - Porject',
      animationClass: {
        step1: false,
        step2: false,
        step3: false
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.$set(this.animationClass, 'step1', true)
    }, 50)
    setTimeout(() => {
      this.$set(this.animationClass, 'step2', true)
    }, 3000)
    setTimeout(() => {
      this.$set(this.animationClass, 'step3', true)
    }, 4000)

    setTimeout(() => {
      this.$router.push({ path: 'Caculating' })
    }, 10000)
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
