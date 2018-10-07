<template>
  <div class="search-bar">
    <div class="header">
      搜索工具条
    </div>
    <!-- <div class="search" :class="{'active-sea': isActive}">
      <input type="text"
        class="inp-search"
        @click="search"
        :class="{'active-inp': isActive}"
        @input="changeText"
        v-model="inpText"
        placeholder="名称/单号/库房">
      <button class="btn-search"
        :class="{'active-btn': isActive}"
        @click="cancel">{{text}}</button>
      <i class="cha"
        :class="{'active-btn': text === '搜索'}"
        @click="clearText">×</i>
    </div> -->
    <div @click="openTips">弹出</div>
  </div>
</template>

<script>
import { Toast, MessageBox } from '@/utils'

export default {
  name: 'SearchBar',
  data () {
    return {
      isActive: false,
      inpText: '',
      text: '取消'
    }
  },
  methods: {
    search () {
      this.isActive = true
    },
    changeText () {
      this.text = '取消'
      if (this.inpText === '') {
        this.text = '取消'
      } else {
        this.text = '搜索'
      }
    },
    cancel () {
      if (this.text === '取消') {
        this.isActive = false
      }
    },
    clearText () {
      this.inpText = ''
      this.text = '取消'
    },
    openTips () {
      // Toast.open({
      //   message: '登陆成功',
      //   time: 3000
      // })

      // await MessageBox.alert({
      //   message: '登陆成功！'
      // })
      // console.log('77777')

      // MessageBox.confirm({
      //   message: '登陆成功！'
      // })

      MessageBox.prompt().then(item => {
        console.log(item)
      })
    }
  }
}
</script>

<style lang="scss">
.search-bar{
  position: absolute;
  z-index: 99999;
  height: 100%;
  width: 100%;
  .header{
    text-align: center;
    line-height: 1.09375rem;
    height: 1.09375rem;
    background-color:pink;
  }
  .search{
    width: 100%;
    position: absolute;
    top: 1.09375rem;
    left: 0rem;
    height: 1.09375rem;
    background-color: #eeeff3;
    padding: .15625rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    transition: all .3s;
    .inp-search{
      box-sizing: border-box;
      padding: 0 15px;
      outline: none;
      width: 100%;
      height:100%;
      border: none;
      border-radius: 10px;
      background-color: white;
      font-size: 24px;
      transition: all .3s;
    }
    .btn-search{
      display: none;
      outline: none;
      width: 12%;
      height: 100%;
      border: none;
      color: #000;
      background-color: #eeeff3;
      font-size: 24px;
      transition: all .3s;
    }
    .cha{
      display: inline-block;
      width: .5rem;
      text-align: center;
      position: absolute;
      top: .3rem;
      left: 7.9rem;
      color: red;
      font-style: normal;
      display: none;
    }
    .active-inp{
      width: 85%;
    }
    .active-btn{
      display: block;
    }
  }
  .active-sea{
    top: 0rem;
  }
}
</style>
