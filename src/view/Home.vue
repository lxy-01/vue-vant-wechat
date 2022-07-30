<template>
  <div>
    <div class="h-full bg-gray-200" style="margin-bottom: 50px;">
      <router-view ></router-view>
    </div>
    <van-tabbar v-model="choose" active-color="#2FBF71" route>
      <van-tabbar-item icon="chat-o" to="/message">微信</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/friends">通讯录</van-tabbar-item>
      <van-tabbar-item icon="eye-o" to="/search">发现</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/mine">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      choose:'',
    }
  }
}
</script>

<style scoped>

</style>