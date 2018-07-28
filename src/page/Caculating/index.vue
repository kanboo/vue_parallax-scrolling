<script>
export default {
  name: 'caculating',
  components: {},
  data() {
    return {
      title: 'Vue - Porject'
    }
  },
  mounted() {
    const timeline = new TimelineMax({})
    timeline.pause()

    const tri = []
    for (var i = 0; i < 30; i++) {
      tri[i] = TweenMax.to(`.triangle_${i}`, `${1 + Math.random() * 2}`, {
        x: 2000,
        y: -2500,
        scale: 1 + Math.random()
      })
      timeline.add(tri[i], `${0.1 * i}`)
    }

    const triangleBig = TweenMax.to('.triangle_big', 2, {
      x: 3500,
      y: -1000,
      scale: 25
    })
    timeline.add(triangleBig, 0.5)

    const triangleBigHidden = TweenMax.to('.triangle_big', 1, {
      opacity: 0
    })
    timeline.add(triangleBigHidden, 2.4)

    const backgroundGoBlock = TweenMax.to('body', 0.1, {
      backgroundColor: '#ff3c82'
    })
    timeline.add(backgroundGoBlock, 2.4).to('.triangle_big', 0.5, {
      visibility: 'hidden'
    })
    const restart = TweenMax.to('#restart', 1, {
      display: 'block'
    })
    timeline.add(restart, 2.4)

    window.addEventListener('scroll', function() {
      const currentY = document.querySelector('html').scrollTop
      const pageHeight =
        document.querySelector('html').scrollHeight - window.innerHeight
      // console.log(timeline.time())

      // console.log(
      //   currentY,
      //   pageHeight,
      //   document.querySelector('html').clientHeight
      // )

      const progress = currentY / pageHeight
      // console.log(progress)
      // if (progress === 1 || progress > 1) {
      //   // vm.$router.push('result')
      // }
      // console.log(progress)
      timeline.progress(progress)
      timeline.pause()
    })
  },
  methods: {
    goHome() {
      document.querySelector('body').style.backgroundColor = '#1469ff'
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
