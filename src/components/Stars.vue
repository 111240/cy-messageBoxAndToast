<template>
  <div class="stars">
    <i :class="'iconfont ' + v" v-for="(v,k) in starsArray" :key="k" @click="changeBox(k+1)"></i>
  </div>
</template>

<script>
export default {
  name: 'Stars',
  data () {
    return {
      num: 5,
      starsArray: []
    }
  },
  methods: {
    changeBox (v) {
      this.num = v * 2
      for (let i = 0; i < 5; i++) {
        if (i < this.num / 2) {
          this.$set(this.starsArray, i, 'icon-pingxing1')
        }
        if (i >= this.num / 2) {
          this.$set(this.starsArray, i, 'icon-favorite')
        }
      }
      if (this.num % 2 !== 0) {
        let num = Math.floor(this.num / 2)
        this.$set(this.starsArray, num, 'icon-pingxing2')
      }
    },
    firstStars () {
      for (let i = 0; i < 5; i++) {
        if (i < this.num / 2) {
          this.starsArray.push('icon-pingxing1')
        }
        if (i >= this.num / 2) {
          this.starsArray.push('icon-favorite')
        }
      }
      if (this.num % 2 !== 0) {
        let num = Math.floor(this.num / 2)
        this.starsArray[num] = 'icon-pingxing2'
      }
    }
  },
  created () {
    this.firstStars()
  }
}
</script>

<style lang="scss">
.stars{
  i{
    font-size: 30px;
    color: peru;
  }
}
</style>
